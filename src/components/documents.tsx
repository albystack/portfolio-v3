"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";

interface DocumentsProps {
  delay?: number;
}

export function Documents({ delay = 0 }: DocumentsProps) {
  const documents = [
    {
      title: "CV",
      downloadUrl: "/documents/Alberto-Rescigno-CV.pdf"
    },
    {
      title: "Cover Letter (Coming soon)",
      downloadUrl: "/documents/Alberto-Rescigno-Cover-Letter.pdf"
    },
    {
      title: "Official Transcript (Coming soon)",
      downloadUrl: "/documents/Alberto-Rescigno-Transcript.pdf"
    },
    {
      title: "EPQ Report",
      downloadUrl: "/documents/Alberto-Rescigno-EPQ-Report.pdf"
    }
  ];

  const handleDownload = (doc: { title: string; downloadUrl: string }) => {
    const link = document.createElement('a');
    link.href = doc.downloadUrl;
    
    // Extract the actual filename from the URL instead of using the button title
    const filename = doc.downloadUrl.split('/').pop() || 'document.pdf';
    link.download = filename;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="documents" className="py-16 px-6 md:px-8 lg:px-12">
      <div className="w-full">
        <BlurFade delay={delay}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              Important Documents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Download my professional documents including CV, cover letter, and official transcript. 
              All documents are regularly updated and optimized for ATS systems.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.1}>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {documents.map((document, index) => (
              <Button
                key={index}
                onClick={() => handleDownload(document)}
                variant="outline"
                className="h-12 px-6 py-4 text-base font-medium border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-200"
              >
                {document.title}
              </Button>
            ))}
          </div>
        </BlurFade>

        
      </div>
    </section>
  );
}
