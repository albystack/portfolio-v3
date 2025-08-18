"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  imageWidth?: number;
  imageHeight?: number;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  imageWidth = 500,
  imageHeight = 300,
  links,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col lg:flex-row">
          <div className="p-6 lg:w-1/2 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>

            <Markdown className="leading-relaxed text-gray-700 dark:text-white/70 mb-6 prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>

            <div className="flex mt-auto">
              {link && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="mr-2 text-sm"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <BiLinkExternal className="mr-1 w-4 h-4" /> Live
                  </a>
                </Button>
              )}

              {links &&
                links.length > 0 &&
                links.map((linkItem, idx) => {
                  if (
                    linkItem.type.toLowerCase().includes("demo") ||
                    linkItem.type.toLowerCase().includes("video")
                  ) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="mr-2 text-sm"
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillYoutube className="mr-1 w-4 h-4" /> Demo
                        </a>
                      </Button>
                    );
                  } else if (linkItem.type.toLowerCase().includes("github")) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="outline"
                        size="sm"
                        className="mr-2 text-sm"
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub className="mr-1 w-4 h-4 opacity-70" />{" "}
                          <span className="opacity-70">GitHub</span>
                        </a>
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="mr-2 text-sm"
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BiLinkExternal className="mr-1 w-4 h-4" />{" "}
                          {linkItem.type}
                        </a>
                      </Button>
                    );
                  }
                })}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center p-6">
            {image && (
              <Image
                src={image}
                alt={title}
                width={600}
                height={200}
                quality={95}
                className="w-full max-w-md shadow-lg object-contain rounded-lg"
              />
            )}

            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
