"use client";
import UserStore from "@/app/store/AuthStore";
import Spinner from "@/components/icons/Spinner";
import { DeleteIcon, UploadIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

type UploadProps = {
  id: string;
};

const UploadForm = ({ id }: UploadProps) => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = UserStore();
  const { toast } = useToast();

  const onDrop = async (files: File[]) => {
    const newFiles = files.slice(0, 3);
    const updatedFiles = [...acceptedFiles, ...newFiles].slice(0, 3);
    setAcceptedFiles(updatedFiles);
  };

  const maxFilesMessage = "Max 3 files allowed";
  const fileNotSupportedMessage = "File type not supported";
  const dropFilesMessage = "Drop the files here...";
  const selectFilesMessage =
    "Drag drop some files here, or click to select a txt, pdf, or word file (up to 5 MB in size)";

  const isMaxFilesReached = acceptedFiles.length === 3;

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 3,
    accept: {
      "text/plain": [".txt"],
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".doc", ".docx"],
    },
    multiple: true,
    maxSize: 5 * 1024 * 1024, // 5MB in bytes
    onDrop,
  });

  const removeFile = (fileToRemove: File) => {
    const updatedFiles = acceptedFiles.filter((file) => file !== fileToRemove);
    setAcceptedFiles(updatedFiles);
  };

  const renderStatutsMessage = () => {
    if (isDragActive) {
      if (isDragReject)
        return (
          <p className="text-center text-xl-500 text-black">
            {fileNotSupportedMessage}
          </p>
        );
      if (isDragAccept)
        return (
          <p className="text-center text-xl-500 text-black">
            {dropFilesMessage}
          </p>
        );
      if (isMaxFilesReached)
        return (
          <p className="text-center text-xl-500 text-black">
            {maxFilesMessage}
          </p>
        );
    } else {
      return (
        <p className="text-center text-xl-500 text-black">
          {selectFilesMessage}
        </p>
      );
    }
  };

  const filesUploaded = acceptedFiles.map((file) => (
    <li
      key={file.name}
      className="bg-primary px-5 rounded flex items-center justify-between min-w-[300px] w-full"
    >
      <span className="text-white">
        {file.name} - {file.size} bytes
      </span>
      <Button className="px-0" onClick={() => removeFile(file)}>
        <DeleteIcon width={20} height={20} fill="#ffffff" />
      </Button>
    </li>
  ));

  const filesLength = filesUploaded.length;

  const handleUploaedFiles = async () => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("folder", id);
      formData.append("name", file.name);
      formData.append("file", file);
    });
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sorayia-backend.onrender.com/api/create_file",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        toast({
          title: "Success",
          description: "Files uploaded successfully",
          variant: "success",
        });
        setAcceptedFiles([]);
      } else {
        console.error("Échec du téléversement des fichiers.");
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors du téléversement des fichiers :",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "rounded border-2 border-dashed border-gray-100 grid w-full justify-center items-center gap-1.5 h-48",
          {
            "bg-green-100 border-green-300": isDragAccept,
            "bg-red-100 border-red-300":
              isDragReject || (isDragActive && isMaxFilesReached),
          }
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="gap-4 flex flex-col items-center justify-center w-full">
          <span
            className={`flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full ${
              isDragActive && "hidden"
            }`}
          >
            <UploadIcon width={25} height={25} fill="#999999" />
          </span>
          {renderStatutsMessage()}
        </div>
      </div>
      {filesLength > 0 && (
        <ul className="rounded border-x-2 border-b-2 border-dashed border-gray-100 w-full p-2 flex gap-1">
          {filesUploaded}
        </ul>
      )}
      {filesLength > 0 && (
        <Button
          className="w-[50%] rounded mx-auto mt-4"
          disabled={isLoading}
          onClick={() => handleUploaedFiles()}
        >
          {isLoading ? <Spinner /> : "Upload"}
        </Button>
      )}
    </>
  );
};

export default UploadForm;
