import React from 'react';
import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export enum Publisher {
  AITimeJournal = 'AI Time Journal',
  CodeProject = 'CodeProject',
  DOU = 'DOU',
  DataDrivenInvestor = 'Data Driven Investor',
  GeeksForGeeks = 'GeeksForGeeks',
  HackerNews = 'Hacker News',
  HackerNoon = 'HackerNoon',
  HowIGotJob = 'HowIGotJob',
  ITNEXT = 'ITNEXT',
  JavaScriptInPlainEnglish = 'JavaScript in Plain English',
  KDnuggets = 'KDnuggets',
  Newline = 'Newline',
  TechCrunch = 'TechCrunch',
  TowardsDataScience = 'Towards Data Science',
}

export type PublisherData = {
  logo: Image,
  description?: React.ReactNode,
}

export type Publication = {
  title: string;
  summary: string[];
  link: Link;
  date: DateString;
  publisher: Publisher;
  tags?: Tag[];
};
