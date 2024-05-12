"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useGetContentNameStore from "@/store/GetContentNameStore";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContentBreadcrumb = () => {
  const ContentName = useGetContentNameStore((state) => state.contentName);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              className="text-primary font-bold hover:text-primary-300"
              href="/dashboard/content"
            >
              Content
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            {isClient ? <>{ContentName}</> : "..."}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ContentBreadcrumb;
