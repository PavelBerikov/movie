export interface IAvatar {
    gravatar: {
        hash: string;
    };
    tmdb: {
        avatar_path: string | null;
    };
}

export interface IAccInfo {
    avatar: IAvatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}