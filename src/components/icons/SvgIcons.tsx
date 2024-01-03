import { FC } from "react";

interface IconProps {
  width: number;
  height: number;
  fill: string;
}

export const FacebookIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
};
export const LinkedinIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.94 5.001a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.481H3v12.52h4V8.481Zm6.32 0H9.34v12.52h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
    </svg>
  );
};
export const GoogleIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 11h8.533c.044.385.067.78.067 1.184 0 2.734-.98 5.036-2.678 6.6-1.485 1.371-3.518 2.175-5.942 2.175A8.977 8.977 0 0 1 3.682 8.543 8.976 8.976 0 0 1 11.98 3c2.42 0 4.453.89 6.008 2.339L16.526 6.8C15.368 5.681 13.803 5 12 5a7 7 0 1 0 0 14c3.526 0 6.144-2.608 6.577-6H12v-2Z" />
    </svg>
  );
};
export const TwitterIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.162 5.655a8.383 8.383 0 0 1-2.402.658 4.196 4.196 0 0 0 1.84-2.314c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.17 4.17 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072 4.185 4.185 0 0 0 3.907 2.905 8.393 8.393 0 0 1-6.19 1.732 11.829 11.829 0 0 0 6.41 1.88c7.692 0 11.9-6.373 11.9-11.9 0-.18-.006-.362-.014-.54a8.495 8.495 0 0 0 2.087-2.165v-.001Z" />
    </svg>
  );
};
export const DoubbleQuoteIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.583 17.318C3.553 16.224 3 14.998 3 13.008c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.31 1.804.166 3.226 1.647 3.226 3.488a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179Zm10 0c-1.03-1.094-1.583-2.32-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.31 1.804.166 3.226 1.647 3.226 3.488a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179Z" />
    </svg>
  );
};
export const EmailIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2Zm8 9 8-5V6l-8 5-8-5v2l8 5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const LockIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8ZM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7Z" />
    </svg>
  );
};
export const ChatBullIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path d="M12 19.6c5.302 0 9.6-3.76 9.6-8.4 0-4.638-4.298-8.4-9.6-8.4-5.301 0-9.6 3.762-9.6 8.4 0 2.113.892 4.045 2.364 5.52-.116 1.22-.5 2.557-.925 3.56-.095.223.089.473.328.434 2.707-.444 4.316-1.125 5.016-1.48a10.89 10.89 0 0 0 2.817.367Z" />
    </svg>
  );
};
export const ChatIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.156 13.994a.985.985 0 1 1 .907-.608.977.977 0 0 1-.907.608Zm-4.789 0a.984.984 0 1 1 .907-.608.977.977 0 0 1-.907.608Zm7.13 5.572C23.02 18.473 24 16.834 24 14.976c0-3.332-3.211-6.063-7.238-6.063-4.027 0-7.239 2.732-7.239 6.063 0 3.332 3.211 6.063 7.239 6.063.816 0 1.633-.11 2.34-.328a.67.67 0 0 1 .217-.055.78.78 0 0 1 .382.11l1.58.928a.544.544 0 0 0 .163.055.234.234 0 0 0 .218-.218.67.67 0 0 0-.036-.181c-.02-.069-.234-.75-.345-1.185a.897.897 0 0 1-.015-.162.535.535 0 0 1 .234-.439" />
      <path d="M11.537 8.368a1.147 1.147 0 0 1 0-2.294c.599 0 1.143.546 1.143 1.147.055.6-.49 1.147-1.143 1.147Zm-5.768 0a1.147 1.147 0 1 1 1.143-1.15 1.152 1.152 0 0 1-1.143 1.148v.002ZM8.653 2.25C3.863 2.25 0 5.473 0 9.516c0 2.184 1.143 4.15 2.993 5.462.164.108.195.35.195.444a.533.533 0 0 1-.031.21c-.164.546-.373 1.43-.382 1.477-.008.047-.054.164-.054.219a.257.257 0 0 0 .272.273.336.336 0 0 0 .164-.055l1.905-1.093c.164-.11.273-.11.436-.11.093.002.186.02.272.055.87.274 1.85.383 2.83.383h.49a6.246 6.246 0 0 1-.272-1.803c0-3.66 3.537-6.609 7.891-6.609h.49c-.6-3.442-4.192-6.119-8.546-6.119Z" />
    </svg>
  );
};
export const BotIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.683 17.808a.625.625 0 0 0 .442 1.067h3.75a.625.625 0 1 0 0-1.25h-3.75a.625.625 0 0 0-.442.183Z" />
      <path
        fillRule="evenodd"
        d="M8.913 9.982c-1.62-.151-3.163 1.093-3.163 2.72v1.447a1.166 1.166 0 0 0 .956 1.168c1.057.183 2.925.433 5.294.433a31.36 31.36 0 0 0 5.294-.433 1.166 1.166 0 0 0 .956-1.168v-1.447c0-1.627-1.544-2.871-3.162-2.72a33.221 33.221 0 0 1-6.175 0Zm2.369 1.696a.312.312 0 0 1 .373.16l1.053 2.124.942-.981a.312.312 0 0 1 .208-.095 31.35 31.35 0 0 0 2.475-.236.312.312 0 0 1 .085.618c-.798.11-1.6.188-2.403.236l-1.165 1.212a.312.312 0 0 1-.505-.077L11.286 12.5l-.942.92a.313.313 0 0 1-.236.089 31.266 31.266 0 0 1-2.525-.242.312.312 0 0 1 .085-.618c.776.106 1.556.182 2.339.229l1.15-1.125a.31.31 0 0 1 .125-.076Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M13.155 4.353a1.25 1.25 0 0 1-.53.605v1.417h2.5A5.625 5.625 0 0 1 20.75 12v.625a1.25 1.25 0 0 1 1.25 1.25v2.5a1.25 1.25 0 0 1-1.25 1.25v1.25a2.5 2.5 0 0 1-2.5 2.5H5.75a2.5 2.5 0 0 1-2.5-2.5v-1.25A1.25 1.25 0 0 1 2 16.375v-2.5a1.25 1.25 0 0 1 1.25-1.25V12a5.625 5.625 0 0 1 5.625-5.625h2.5V4.958a1.25 1.25 0 1 1 1.78-.605ZM19.5 18.875V12a4.375 4.375 0 0 0-4.375-4.375h-6.25A4.375 4.375 0 0 0 4.5 12v6.875a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const SettingIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.835 2.908c.303-1.212 2.025-1.212 2.33 0l.088.358a1.2 1.2 0 0 0 2.028.542l.256-.263c.869-.9 2.36-.038 2.016 1.163l-.1.355a1.2 1.2 0 0 0 1.484 1.484l.354-.101c1.2-.344 2.062 1.147 1.164 2.016l-.264.256a1.2 1.2 0 0 0 .542 2.028l.358.089c1.212.303 1.212 2.025 0 2.33l-.358.088a1.202 1.202 0 0 0-.542 2.028l.264.256c.898.869.037 2.36-1.164 2.016l-.355-.1a1.2 1.2 0 0 0-1.484 1.484l.101.354c.344 1.2-1.147 2.062-2.016 1.164l-.256-.264a1.201 1.201 0 0 0-2.028.542l-.088.358c-.304 1.212-2.025 1.212-2.33 0l-.09-.358a1.202 1.202 0 0 0-2.027-.542l-.256.264c-.869.898-2.36.037-2.016-1.164l.1-.355a1.2 1.2 0 0 0-1.483-1.484l-.355.101c-1.2.344-2.062-1.147-1.163-2.016l.263-.256a1.2 1.2 0 0 0-.542-2.028l-.358-.088c-1.212-.304-1.212-2.025 0-2.33l.358-.09a1.2 1.2 0 0 0 .542-2.027l-.263-.256c-.9-.869-.038-2.36 1.163-2.016l.355.1a1.2 1.2 0 0 0 1.484-1.483l-.101-.355c-.344-1.2 1.147-2.062 2.016-1.163l.256.263a1.2 1.2 0 0 0 2.028-.542l.089-.358Zm7.38 9.717h-5.903L8.77 17.348a6.245 6.245 0 0 0 9.446-4.723Zm0-1.25A6.247 6.247 0 0 0 8.77 6.65l3.542 4.725h5.904v-.001ZM8.31 6.958c-.038.027-.073.054-.11.082l.11-.082Zm-.54.444A6.23 6.23 0 0 0 5.753 12c0 1.818.778 3.456 2.019 4.597L11.218 12 7.771 7.402Zm.43 9.558.11.08-.11-.08Z" />
    </svg>
  );
};
export const ContentIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.32 5.88a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"
        clipRule="evenodd"
      />
      <path d="M7.92 7.08a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm.6 4.2a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Zm0 4.8a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Z" />
      <path
        fillRule="evenodd"
        d="M3.72 11.28a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 0h1.2v1.2h-1.2v-1.2Zm0 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const FolderPlusIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M0 4a2.4 2.4 0 0 1 2.4-2.4h6.731l3.2 3.2H21.6A2.4 2.4 0 0 1 24 7.2V20a2.4 2.4 0 0 1-2.4 2.4H2.4A2.4 2.4 0 0 1 0 20V4Zm11.2 13.6v-3.2H8v-1.6h3.2V9.6h1.6v3.2H16v1.6h-3.2v3.2h-1.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const FolderIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.4 1.6A2.4 2.4 0 0 0 0 4v16a2.4 2.4 0 0 0 2.4 2.4h19.2A2.4 2.4 0 0 0 24 20V7.2a2.4 2.4 0 0 0-2.4-2.4h-9.269l-3.2-3.2H2.4Z" />
    </svg>
  );
};
export const FolderOpenIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path d="M22.678 10.369a1.519 1.519 0 0 0-1.219-.619H20.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-6.497L9.647 4.8a1.463 1.463 0 0 0-.9-.3H3.75A1.5 1.5 0 0 0 2.25 6v13.5a.74.74 0 0 0 .75.75h16.5a.75.75 0 0 0 .713-.516l2.671-8.006a1.529 1.529 0 0 0-.206-1.36ZM8.747 6l2.606 1.95c.258.197.575.303.9.3h6.497v1.5H6.544a1.5 1.5 0 0 0-1.425 1.022L3.75 14.878V6h4.997Z" />
    </svg>
  );
};
export const UploadIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M15 10v6H9v-6H5l7-7 7 7h-4Zm4 10v-2H5v2h14Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const PenIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m4.93 21.482 5.845-5.846a2 2 0 1 0-1.414-1.414l-5.846 5.846-1.06-1.06c2.827-3.3 3.888-6.954 5.302-13.082l6.364-.707 5.657 5.657-.707 6.364c-6.128 1.414-9.782 2.475-13.08 5.303l-1.062-1.06v-.001ZM16.595 2.037l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.656.212-1.485a.5.5 0 0 1 .848-.283Z" />
    </svg>
  );
};
export const LinkIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.688 4.313a4.856 4.856 0 0 0-6.891 0L10.94 6.169A.75.75 0 0 0 12 7.229l1.856-1.857a3.384 3.384 0 0 1 5.506 1.094 3.364 3.364 0 0 1-.734 3.678l-2.653 2.653a3.384 3.384 0 0 1-4.772 0 .749.749 0 1 0-1.06 1.06 4.875 4.875 0 0 0 6.891 0l2.654-2.654a4.857 4.857 0 0 0 0-6.89Z" />
      <path d="m12 16.773-1.856 1.856a3.375 3.375 0 0 1-4.772-4.772l2.653-2.653a3.384 3.384 0 0 1 4.772 0 .75.75 0 0 0 1.06-1.06 4.875 4.875 0 0 0-6.891 0l-2.654 2.654a4.875 4.875 0 1 0 6.891 6.89l1.856-1.856A.75.75 0 0 0 12 16.772Z" />
    </svg>
  );
};
export const PencilIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12.9 6.86 4.242 4.243-9.9 9.899H3v-4.243l9.9-9.9v.001Zm1.414-1.414 2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242Z" />
    </svg>
  );
};
export const DeleteIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M15.5 4H19v2H5V4h3.5l1-1h5l1 1ZM8 21c-1.1 0-2-.9-2-2V7h12v12c0 1.1-.9 2-2 2H8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const QuestionIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM8.87 9.541h1.031c.173 0 .31-.141.333-.312.112-.82.675-1.418 1.677-1.418.858 0 1.643.429 1.643 1.46 0 .794-.468 1.159-1.207 1.714-.84.611-1.507 1.325-1.46 2.484l.004.271a.313.313 0 0 0 .313.307h1.013a.313.313 0 0 0 .313-.312v-.131c0-.898.341-1.159 1.263-1.858.76-.579 1.555-1.221 1.555-2.57 0-1.889-1.596-2.801-3.342-2.801-1.584 0-3.319.737-3.437 2.857a.296.296 0 0 0 .301.31Zm2.906 8.054c.763 0 1.287-.492 1.287-1.159 0-.69-.526-1.175-1.287-1.175-.73 0-1.261.485-1.261 1.175 0 .666.531 1.159 1.262 1.159Z" />
    </svg>
  );
};
export const ShareIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z" />
    </svg>
  );
};
export const MicrophoneIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.64 6a3.6 3.6 0 0 1 7.2 0v6a3.6 3.6 0 1 1-7.2 0V6Z" />
      <path d="M6.84 10.2a.6.6 0 0 1 .6.6V12a4.8 4.8 0 1 0 9.6 0v-1.2a.6.6 0 1 1 1.2 0V12a6 6 0 0 1-5.4 5.97v2.43h3.6a.6.6 0 1 1 0 1.2h-8.4a.6.6 0 1 1 0-1.2h3.6v-2.43A6 6 0 0 1 6.24 12v-1.2a.6.6 0 0 1 .6-.6Z" />
    </svg>
  );
};
export const CardImageIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.603 9a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z" />
      <path d="M4.2 4.8a1.8 1.8 0 0 0-1.8 1.8v10.8a1.8 1.8 0 0 0 1.8 1.8h15.6a1.8 1.8 0 0 0 1.8-1.8V6.6a1.8 1.8 0 0 0-1.8-1.8H4.2ZM19.8 6a.6.6 0 0 1 .6.6v7.2l-4.53-2.337a.6.6 0 0 0-.692.112l-4.452 4.452-3.192-2.126a.6.6 0 0 0-.756.074L3.603 16.8v.648A.605.605 0 0 1 3.6 17.4V6.6a.6.6 0 0 1 .6-.6h15.6Z" />
    </svg>
  );
};
export const SendIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
    </svg>
  );
};
export const CaretDownIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
    </svg>
  );
};
export const PeopleIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.8 19.2s-1.2 0-1.2-1.2 1.2-4.8 6-4.8 6 3.6 6 4.8c0 1.2-1.2 1.2-1.2 1.2h-9.6Zm4.8-7.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" />
      <path
        fillRule="evenodd"
        d="M8.66 19.2A2.685 2.685 0 0 1 8.4 18c0-1.626.816-3.3 2.324-4.464A7.592 7.592 0 0 0 8.4 13.2c-4.8 0-6 3.6-6 4.8 0 1.2 1.2 1.2 1.2 1.2h5.06Z"
        clipRule="evenodd"
      />
      <path d="M7.8 12a3 3 0 1 0 .001-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};
export const UserIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4ZM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const UserAddIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path d="M3.6 19.2s-1.2 0-1.2-1.2 1.2-4.8 7.2-4.8 7.2 3.6 7.2 4.8c0 1.2-1.2 1.2-1.2 1.2h-12Zm6-7.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" />
      <path
        fillRule="evenodd"
        d="M18.6 8.4a.6.6 0 0 1 .6.6v1.8H21a.6.6 0 1 1 0 1.2h-1.8v1.8a.6.6 0 1 1-1.2 0V12h-1.8a.6.6 0 1 1 0-1.2H18V9a.6.6 0 0 1 .6-.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const DataUsageIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2.025v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95Zm-1 16.95c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92v-3.03c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53a6.95 6.95 0 0 1-5.45 2.62Z" />
    </svg>
  );
};
export const IntegrationIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 18.5C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337v-3.488c.244.273.509.527.813.744 1.18.844 2.617 1.098 3.918 1.098.966 0 1.853-.14 2.506-.281a3.5 3.5 0 0 0 3.264 2.265c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5a3.5 3.5 0 0 0-3.404 2.718c-1.297.321-3.664.616-5.119-.426-.666-.477-1.09-1.239-1.306-2.236C8.755 7.96 9.5 6.821 9.5 5.5 9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337Zm15-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 12.827 16 12s.673-1.5 1.5-1.5Zm-10 8c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5Zm-3-13C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5Z" />
    </svg>
  );
};
export const ApiIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 10.503c-.64 0-1.264.205-1.779.586L7.5 7.192v-.094a3 3 0 1 0-3 0v9.809a3 3 0 1 0 3 0v-6.43l7.52 3.361A3 3 0 1 0 18 10.503Zm-12-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm12-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </svg>
  );
};
export const PlusIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2Z" />
    </svg>
  );
};
export const LogOutIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4ZM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5Z" />
    </svg>
  );
};
export const MoreIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const ClipboardCheckIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M8.687 2.928A1.8 1.8 0 0 1 9.96 2.4h3.6a1.8 1.8 0 0 1 1.8 1.8v1.2a1.8 1.8 0 0 1-1.8 1.8h-3.6a1.8 1.8 0 0 1-1.8-1.8V4.2c0-.477.19-.935.527-1.272Zm5.297.848a.6.6 0 0 0-.424-.176h-3.6a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h3.6a.6.6 0 0 0 .6-.6V4.2a.6.6 0 0 0-.176-.424Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.76 4.2h1.2v1.2a3 3 0 0 0 3 3h3.6a3 3 0 0 0 3-3V4.2h1.2a2.4 2.4 0 0 1 2.4 2.4v12.6a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4V6.6a2.4 2.4 0 0 1 2.4-2.4Zm5.825 12.425 3.6-3.6a.6.6 0 1 0-.85-.85l-3.175 3.177-1.375-1.377a.6.6 0 1 0-.85.85l1.8 1.8a.6.6 0 0 0 .85 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
