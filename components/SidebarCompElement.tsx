import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import Image from "next/image";

function SidebarCompElement({ formElement }: { formElement: FormElement }) {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className="flex items-center gap-2 p-2 cursor-grab flex-col"
    >
      <Image
        width={150}
        height={40}
        src="https://firebasestorage.googleapis.com/v0/b/hoopscirclev2.appspot.com/o/Media%2FScreenshot%202024-03-08%20at%2010.08.49%E2%80%AFAM.png?alt=media&token=2f9a73e8-0713-4ab9-944a-13fcb058ca20"
        alt="element"
      />
      {/* <Button
        variant={"outline"}
        className={cn(
          "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",
          draggable.isDragging && "ring-2 ring-primary"
        )}
      >
      </Button> */}
      <p className="text-xs">{label}</p>
    </div>
  );
}

export function SidebarBtnElementDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.designerBtnElement;

  return (
    <Button
      variant={"outline"}
      className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export default SidebarCompElement;
