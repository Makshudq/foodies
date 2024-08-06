export class Food {
  id!: number;
  name!: string;
  price!: number;
  tag?: string[];
  favorite: boolean = false;
  starts: number = 0;
  imgUrl!: string;
  origin!: string[];
  cooktime!: string;
}
