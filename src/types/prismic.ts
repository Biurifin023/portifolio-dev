import type { ImageField, KeyTextField } from "@prismicio/client"

export type PortCard = {
    title: KeyTextField
    description: KeyTextField
    type: KeyTextField
    stack_card: KeyTextField
    stack_card2: KeyTextField
    stack_card3: KeyTextField
    stack_card4: KeyTextField
    stack_card5: KeyTextField
    stack_card6: KeyTextField
    stack_card7: KeyTextField
    stack_card8: KeyTextField
    stack_card9: KeyTextField
    stack_card10: KeyTextField
}

export type PortAboutItem = {
    description: KeyTextField
    stacks: KeyTextField
}

export type PortSlugProject = {
    title: KeyTextField
    description: KeyTextField
    description_about: KeyTextField
    funtionalities1: KeyTextField
    funtionalities2: KeyTextField
    funtionalities3: KeyTextField
    funtionalities4: KeyTextField
    print_page: ImageField
}

export type PortDocumentData = {
    card: PortCard[]
    about: PortAboutItem[]
    slug_project: PortSlugProject[]
}
