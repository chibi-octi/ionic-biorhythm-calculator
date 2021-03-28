import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [birthDate, setBrithDate] = useState('');
  const targetDate = new Date().toISOString();
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate &&
            <BiorhythmCard birthDate = {birthDate} targetDate={targetDate}/>
        }
        <IonItem>
          <IonLabel position="floating">Date of birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBrithDate(event.detail.value)}
          />
        </IonItem>
        
        
      </IonContent>
    </IonApp>
  );
}

export default App;
