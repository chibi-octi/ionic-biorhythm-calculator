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
import {useLocalStorage} from './hooks';

function App() {
  const [birthDate, setBrithDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString())
  
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
          <IonLabel position="fixed">Date of birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBrithDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>

        
        
        
      </IonContent>
    </IonApp>
  );
}

export default App;
