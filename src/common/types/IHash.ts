/**
 * Simple HashMap interface
 */
export interface IHash<T> {
    /**
     * String key with generic value
     */
    [id: string]: T;
}