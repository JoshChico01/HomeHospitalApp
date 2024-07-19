import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CommentFrame } from '../PatientSocial/CommentFrame/CommentFrame.js';
import { MedicalAcute } from './MedicalAcute/MedicalAcute.js';
import { MedicalStable } from './MedicalStable/MedicalStable.js';
import classes from './PatientMedical.module.css';

interface Props {
  className?: string;
  setCurrentView: (view: string) => void;
}
/* @figmaId 863:7629 */
export const PatientMedical: FC<Props> = memo(function PatientMedical(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.details}>
        <div className={classes.frame25}>
          <div className={classes.done}>DONE</div>
          <div className={classes.frame26}>
            <a href="#" className={classes.socialConditions} onClick={() => props.setCurrentView('showSocial')}>
              Social Conditions
            </a>
            <div className={classes.group92}>
              <a href="#" className={classes.generalMedicalConditions} onClick={() => props.setCurrentView('showGeneralMedical')}>
                General Medical Conditions
              </a>
              <div className={classes.rectangle103}></div>
            </div>
            <div className={classes.diagnosticConditions}>Diagnostic Conditions</div>
          </div>
        </div>
        <CommentFrame />
        <MedicalAcute />
        <MedicalStable />
      </div>
    </div>
  );
});
