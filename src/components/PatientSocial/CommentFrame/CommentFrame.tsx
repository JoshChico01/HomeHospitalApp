import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Comments } from '../Comments/Comments.js';
import classes from './CommentFrame.module.css';

interface Props {
  className?: string;
}
/* @figmaId 677:1215 */
export const CommentFrame: FC<Props> = memo(function CommentFrame(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Comments
        text={{
          title: (
            "Final Comment and Decision"
          ),
        }}
      />
    </div>
  );
});
