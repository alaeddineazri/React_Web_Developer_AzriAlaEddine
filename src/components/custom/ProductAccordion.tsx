import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionItemType = {
    label: string;
    value: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
};

interface ProductAccordionProps {
    items: AccordionItemType[];
}

const ProductAccordion: React.FC<ProductAccordionProps> = ({ items }) => {
    return (
        <Accordion type="multiple">
            {items.map(({ label, value, icon, content }) => (
                <AccordionItem key={value} value={value}>
                    <AccordionTrigger className="text-lg font-medium">
                        <div className="flex items-center justify-start gap-4">
                            {icon} {label}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ProductAccordion;
