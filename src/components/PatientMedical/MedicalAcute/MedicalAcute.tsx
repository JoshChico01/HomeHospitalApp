import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MedicalAcute.module.css';
import { YesNoQ } from '../../PatientSocial/YesNoQ/YesNoQ';
import { MCQ } from '../../PatientSocial/MCQ/MCQ';

interface Props {
  className?: string;
}
/* @figmaId 689:6561 */
export const MedicalAcute: FC<Props> = memo(function MedicalAcute(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.titleBlock}>Acute and Modifiable Conditions</div>
      <div className={classes.frame28}>
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              "Acute delirium"
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <p>Hypoxemia with oxygen saturation &lt; 90% or PO2 &lt; 60 mm Hg uncorrected with &lt; 6 liters per
                minute oxygen supplementation by nasal cannula</p>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              "Bronchodilator (nebulizer) treatments required every 2 hours or more frequently"
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              "Septic shock"
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              "Requirement for monitoring more frequent than every 2 hours"
            )
          }}
        />
        <MCQ
          className={classes.mCQ}
          id={'precedureOpt'}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            optionList: [
              "Computed tomography",
              "Magnetic resonance imaging",
              "Endoscopic procedure",
              "Blood transfusion",
              "Cardiac stress test",
              "Surgery",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "Require any of the following procedures:"
            ),
          }}
        />
      </div>
    </div>
  );
});
