"use client";
import { cn } from "@/lib/utils";
import { useDropzone } from "react-dropzone";
import { DeleteIcon, UploadIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const UploadForm = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

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
      "application/msword": [".doc", ".docx"],
    },
    multiple: true,
    maxSize: 5 * 1024 * 1024, // 5MB in bytes
    onDrop: (files: File[]) => {
      const newFiles = files.slice(0, 3);
      const updatedFiles = [...acceptedFiles, ...newFiles].slice(0, 3);
      setAcceptedFiles(updatedFiles);
    },
  });

  const removeFile = (fileToRemove: File) => {
    const updatedFiles = acceptedFiles.filter((file) => file !== fileToRemove);
    setAcceptedFiles(updatedFiles);
  };

  const renderStatutsMessage = () => {
    if (isDragActive) {
      if (isDragReject) return <p className="text-center text-xl-500 text-black">{fileNotSupportedMessage}</p>;
      if (isDragAccept) return <p className="text-center text-xl-500 text-black">{dropFilesMessage}</p>;
      if (isMaxFilesReached) return <p className="text-center text-xl-500 text-black">{maxFilesMessage}</p>;
    } else {
      return (
        <p className="text-center text-xl-500 text-black">
          {selectFilesMessage}
        </p>
      );
    }
  };

  const filesUploaded = acceptedFiles.map((file) => (
    <li key={file.name} className="bg-primary px-5 rounded flex items-center justify-between min-w-[300px] w-full">
      <span className="text-white">
        {file.name} - {file.size} bytes
      </span>
      <Button className="px-0" onClick={() => removeFile(file)}>
        <DeleteIcon width={20} height={20} fill="#ffffff" />
      </Button>
    </li>
  ));

  const filesLength = filesUploaded.length;

  const handleUploaedFiles = () => {
  // Remove spaces in the file name and replace with underscores
  console.log(acceptedFiles.map((file) => file.name.replace(/\s+/g, "_")));
  }

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
            <span className={`flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full ${isDragActive && "hidden"}`}>
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
      {filesLength > 0 && <Button className="w-[50%] rounded mx-auto mt-4" onClick={() => handleUploaedFiles()}>Upload</Button>}
    </>
  );
};

export default UploadForm;
