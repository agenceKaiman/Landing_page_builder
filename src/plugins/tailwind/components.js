import { borderColor, 
    borderRadius, 
    borderStyle, 
    fontWeight, 
    textAlignment, 
    textColor, 
    textDecoration, 
    textFontSize, 
    textOpacity, 
    textOverflow, 
    textTransformation, 
    verticalAlign, 
    wordBreak,
    fontVariant, 
    letterSpacing, 
    lineHeight, 
    tableBorder, 
    tableLayout, 
    backgroundAttachment, 
    backgroundClip,
    bgColor,
    bgRepeat,
    bgSize,
    borderWidth,
    } from "./tailwind_classes";

export default (editor, opts={}) => {
    const dc = editor.DomComponents;
    dc.getTypes().forEach(type => {
        if (type.id==="text" || type.id==="link") {
            dc.addType(type.id, {
                model: {
                    defaults: {
                        traits: [...type.model.prototype.defaults.traits,
                            {
                                type: "class_select",
                                options: textColor.map(color=>({
                                    name: color, 
                                    value: color
                                })),
                                label: "Text Color",
                            },
                            {
                                type: "class_select",
                                options: textFontSize.map(textFontSize=>({
                                    name: textFontSize, 
                                    value: textFontSize
                                })),
                                label: "Text Size",
                            },
                            {
                                type: "class_select",
                                options: textAlignment.map(textAlignment=>({
                                    name: textAlignment, 
                                    value: textAlignment
                                })),
                                label: "Text Alignment",
                            },
                            {
                                type: "class_select",
                                options: textDecoration.map(textDecoration=>({
                                    name: textDecoration, 
                                    value: textDecoration
                                })),
                                label: "Text Décoration",
                            },
                            {
                                type: "class_select",
                                options: textOpacity.map(textOpacity=>({
                                    name: textOpacity, 
                                    value: textOpacity
                                })),
                                label: "Text Opacity",
                            },
                            {
                                type: "class_select",
                                options: textOverflow.map(textOverflow=>({
                                    name: textOverflow, 
                                    value: textOverflow
                                })),
                                label: "Text Overflow",
                            },
                            {
                                type: "class_select",
                                options: textTransformation.map(textTransformation=>({
                                    name: textTransformation, 
                                    value: textTransformation
                                })),
                                label: "Text Transformation",
                            },
                            {
                                type: "class_select",
                                options: verticalAlign.map(verticalAlign=>({
                                    name: verticalAlign, 
                                    value: verticalAlign
                                })),
                                label: "Vertical Alignment",
                            },
                            {
                                type: "class_select",
                                options: borderColor.map(borderColor=>({
                                    name: borderColor, 
                                    value: borderColor
                                })),
                                label: "couleur de la bordure",
                            },
                            {
                                type: "class_select",
                                options: borderStyle.map(borderStyle=>({
                                    name: borderStyle, 
                                    value: borderStyle
                                })),
                                label: "Border Style",
                            },
                            {
                                type: "class_select",
                                options: borderRadius.map(borderRadius=>({
                                    name: borderRadius, 
                                    value: borderRadius
                                })),
                                label: "border radius",
                            },
                            {
                                type: "class_select",
                                options: borderWidth.map(borderWidth=>({
                                    name: borderWidth, 
                                    value: borderWidth
                                })),
                                label: "Border Width",
                            },
                            {
                                type: "class_select",
                                options: fontWeight.map(fontWeight=>({
                                    name: fontWeight, 
                                    value: fontWeight
                                })),
                                label: "Font Weight",
                            },
                            {
                                type: "class_select",
                                options: wordBreak.map(wordBreak=>({
                                    name: wordBreak, 
                                    value: wordBreak
                                })),
                                label: "Word Break",
                            },
                            {
                                type: "class_select",
                                options: fontVariant.map(fontVariant=>({
                                    name: fontVariant, 
                                    value: fontVariant
                                })),
                                label: "Font Variant",
                            },
                            {
                                type: "class_select",
                                options: letterSpacing.map(letterSpacing=>({
                                    name: letterSpacing, 
                                    value: letterSpacing
                                })),
                                label: "Letter Spacing",
                            },
                            {
                                type: "class_select",
                                options: lineHeight.map(lineHeight=>({
                                    name: lineHeight, 
                                    value: lineHeight
                                })),
                                label: "Line Height",
                            },
                            {
                                type: "class_select",
                                options: tableBorder.map(tableBorder=>({
                                    name: tableBorder, 
                                    value: tableBorder
                                })),
                                label: "Table Border",
                            },
                            {
                                type: "class_select",
                                options: tableLayout.map(tableLayout=>({
                                    name: tableLayout, 
                                    value: tableLayout
                                })),
                                label: "Table Layout",
                            },
                            {
                                type: "class_select",
                                options: backgroundAttachment.map(backgroundAttachment=>({
                                    name: backgroundAttachment, 
                                    value: backgroundAttachment
                                })),
                                label: "Background Attachment",
                            },
                            {
                                type: "class_select",
                                options: backgroundClip.map(backgroundClip=>({
                                    name: backgroundClip, 
                                    value: backgroundClip
                                })),
                                label: "Background Clip",
                            },
                            {
                                type: "class_select",
                                options: bgColor.map(bgColor=>({
                                    name: bgColor, 
                                    value: bgColor
                                })),
                                label: "Background Color",
                            },
                            {
                                type: "class_select",
                                options: bgRepeat.map(bgRepeat=>({
                                    name: bgRepeat, 
                                    value: bgRepeat
                                })),
                                label: "Background Repeat",
                            },
                            {
                                type: "class_select",
                                options: bgSize.map(bgSize=>({
                                    name: bgSize, 
                                    value: bgSize
                                })),
                                label: "Background Size",
                            },
                            {
                                type: "class_select",
                                options: borderWidth.map(borderWidth=>({
                                    name: borderWidth, 
                                    value: borderWidth
                                })),
                                label: "Border Width",
                            }
                        ],
                    }
                }
            })
        }
    });
}