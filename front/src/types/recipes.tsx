export type RecipeContent = {
    id: number,
    title: string,
    cookTime: number,
    prepTime: number,
    ingredients: string,
    steps: string,
    category: string,
    image: string,
    categoryId: number,
}

export type RecipeCardContent = {
    id: number,
    title: string,
    cookTime: number,
    prepTime: number,
    category: string,
    image: string,
    link:string,
}