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
import Card from './components/Card';

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

        <IonItem>
          <IonLabel position="floating">Date of birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBrithDate(event.detail.value)}
          />
        </IonItem>
        <Card targetDate={targetDate}/>
        
      </IonContent>
    </IonApp>
  );
}

export default App;
