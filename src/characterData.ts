export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

export interface Characters {
  [code: string]: {
    school: string;
    players: Character[];
  };
}

export const characterData: Characters = {
  kitakomachi: {
    school: '北小町高校',
    players: [
      {
        id: 1,
        name: 'joshi1',
        age: 80,
        height: 170,
      },
      {
        id: 2,
        name: 'joshi2',
        age: 66,
        height: 138,
      },
    ],
  },
  minamikomachi: {
    school: '南小町高校',
    players: [
      {
        id: 3,
        name: 'joshi3',
        age: 6,
      },
      {
        id: 4,
        name: 'joshi4',
        age: 48,
        height: 156,
      },
    ],
  },
};
