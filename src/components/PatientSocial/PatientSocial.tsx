import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CommentFrame } from './CommentFrame/CommentFrame.js';
import classes from './PatientSocial.module.css';
import { Social } from './Social/Social.js';

interface Props {
  className?: string;
  setCurrentView: (view: string) => void;
}
/* @figmaId 863:5842 */
export const PatientSocial: FC<Props> = memo(function PatientSocial(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle197}></div>
      <div className={classes.details}>
        <div className={classes.frame25}>
          <div className={classes.done}>DONE</div>
          <div className={classes.frame26}>
            <div className={classes.group92}>
              <a href="#" className={classes.socialConditions} onClick={() => props.setCurrentView('showSocial')}>
                Social Conditions
              </a>
              <div className={classes.rectangle103}></div>
            </div>
            <a href="#" className={classes.generalMedicalConditions} onClick={() => props.setCurrentView('showGeneralMedical')}>
              General Medical Conditions
            </a>
            <div className={classes.diagnosticConditions}>Diagnostic Conditions</div>
          </div>
        </div>
        <CommentFrame />
        <Social />
      </div>
    </div>
  );
});
