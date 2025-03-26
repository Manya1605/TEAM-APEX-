
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Clock, User } from "lucide-react";

interface NewsDialogProps {
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  date: string;
  readTime: string;
  trigger: React.ReactNode;
}

export const NewsDialog = ({
  title,
  excerpt,
  fullContent,
  author,
  date,
  readTime,
  trigger,
}: NewsDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">{title}</DialogTitle>
          <DialogDescription className="flex flex-wrap items-center gap-4 text-sm pt-2">
            <span className="flex items-center gap-1">
              <User size={14} /> {author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {readTime} read
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="font-medium text-lg mb-4">{excerpt}</p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: fullContent }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
