import type { ImageField, KeyTextField, LinkField } from "@prismicio/client"

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
    stack_1?: KeyTextField
    stack_2?: KeyTextField
    stack_3?: KeyTextField
    stack_4?: KeyTextField
    stack_5?: KeyTextField
    stack_6?: KeyTextField
    stack_7?: KeyTextField
    stack_8?: KeyTextField
    stack_9?: KeyTextField
    stack_10?: KeyTextField
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
    github_url: LinkField
}

export type PortDocumentData = {
    card: PortCard[]
    about: PortAboutItem[]
    slug_project: PortSlugProject[]
}
