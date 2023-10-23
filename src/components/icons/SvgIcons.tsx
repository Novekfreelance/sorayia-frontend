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
      fill="#919191"
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
export const UserIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 22a8 8 0 0 1 16 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Z" />
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
