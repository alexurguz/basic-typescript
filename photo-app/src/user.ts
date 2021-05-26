import { Album } from './album';

export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}

	removeAlbum(id: number): void {
		const newArr = this.album.filter((a) => a.id !== id);
		this.album = newArr;
	}
}
