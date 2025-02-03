import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline underline-offset-2">projects</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline underline-offset-2">articles</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      大模型的出现让我们进入了AI时代，也给程序员这一职业带来了新的机遇和挑战。
      本网站聚焦于AI赋能，跟大家探讨AI时代的程序员们该如抓住这一历史机遇，在这一轮的技术革命中找到自己的位置，实现更好的发展。
    </p>
  );
};

export default Greeting;
