import dayjs from 'dayjs';
import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle 
} from '@ionic/react';
import React from 'react';

import { calculateBiorhythms } from '../calculations';

const formatDate = (isoString) => {
  return dayjs(isoString).format('D MMM YYYY');
}


const BiorhythmCard = ({ birthDate, targetDate }) => {
    const {physical, emotional, intellectual} = calculateBiorhythms(birthDate, targetDate);

    return (
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>
              {formatDate(targetDate)}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: {physical.toFixed(4)}</p>
            <p>Emotional: {emotional.toFixed(4)} </p>
            <p>Intellectual: {intellectual.toFixed(4)} </p>
          </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard