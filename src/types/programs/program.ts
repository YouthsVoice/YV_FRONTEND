export interface Program {
  slug: string;

  title: string;

  tagline: string;

  category: string;

  coverImage: string;

overview:{
title:string;

subtitle:string;

description:string[];

image:string;

}

  objectives: string[];

  metrics: {
    label: string;
    value: string;
  }[];

  gallery: string[];

  stories: {
    name: string;
    quote: string;
    image: string;
  }[];
}