"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";
import { usePublishModalStore } from "@/stores/publishModalStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowBigRightDash, PlusCircle } from "lucide-react";

export const Publish = () => {
  const { isOpen, toggleModal } = usePublishModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogTrigger asChild>
        <Button title="Создать публикацию" onClick={() => toggleModal(true)}>
          <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Выберите тип публикации</DialogTitle>
          <DialogDescription>
            Вы можете найти своего потерянного питомца или сообщить о найденном
            животном
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 grid-rows-2 gap-2 py-4">
          <Button variant="outline" className="w-full justify-start group">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Я хочу найти свою потеряшку</span>
            <ArrowBigRightDash className="ml-auto transition-opacity opacity-0 group-hover:opacity-70" />
          </Button>
          <Button variant="outline" className="group w-full justify-start">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>Я нашел или видел потеряшку</span>
            <ArrowBigRightDash className="ml-auto transition-opacity opacity-0 group-hover:opacity-70" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
