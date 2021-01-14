import React from 'react';

import { BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import type { Link as LinkType } from '../../types/Link';
import CardTitle from '../shared/CardTitle';

type PostPreviewProps = {
  post: BlogPageQuery_allMarkdownRemark_nodes,
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post } = props;

  const postLink: LinkType = {
    url: post.fields?.slug,
  };

  const postTitleLink = post.fields?.slug ? (
    <CardTitle link={postLink}>
      {post?.frontmatter?.title}
    </CardTitle>
  ) : null;

  const postSummary = post?.excerpt ? (
    <div>
      {post?.excerpt}
    </div>
  ) : null;

  return (
    <Card>
      <CardContent>
        {postTitleLink}
        {postSummary}
      </CardContent>
    </Card>
  );
};

export default PostPreview;
