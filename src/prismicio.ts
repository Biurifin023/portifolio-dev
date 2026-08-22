import {
    createClient as createPrismicClient,
    type ClientConfig,
} from "@prismicio/client"

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT

export function createClient(config: ClientConfig = {}) {
    if (!repositoryName) {
        throw new Error(
            "NEXT_PUBLIC_PRISMIC_ENVIRONMENT não está definido no .env.local"
        )
    }

    return createPrismicClient(repositoryName, config)
}
