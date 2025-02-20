// src/pages/Tournament.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataSets from "../data/index.js";
import "./Tournament.css";
function Tournament() {
  // 1) Router'dan kategori parametresi al (ör: "cities")
  const { category } = useParams();
  const data = dataSets[category];

  console.log("category:", category);
  console.log("dataSets:", dataSets);
  console.log("dataSets[category]:", dataSets[category]);
  
  // 3) Tüm Hook'ları koşulsuz tanımla (EN ÜSTTE)
  // - round: Bu turda yarışan öğeler
  // - currentMatchIndex: Bu turda kaçıncı maçı oynuyoruz
  // - winners: Bu turda kazananların geçici listesi
  // - winner: En sonda kalan tek öğe (final kazanan)
  const [round, setRound] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [winners, setWinners] = useState([]);
  const [winner, setWinner] = useState(null);

  // 4) round.length 1 olursa kazanan belli
  useEffect(() => {
    if (round.length === 1) {
      setWinner(round[0]);
    }
  }, [round]);

  // 5) Bir tur bittiğinde, winners'ı yeni tur olarak ata
  useEffect(() => {
    if (round.length > 1 && currentMatchIndex === round.length / 2) {
      setRound(winners);
      setWinners([]);
      setCurrentMatchIndex(0);
    }
  }, [currentMatchIndex, round, winners]);

  // 6) İlk aşamada (component mount olduğunda), data'yı karıştırıp round'a at
  //    (Bunu useEffect ile veya doğrudan da yapabilirsin)
  useEffect(() => {
    if (data) {
      const shuffled = shuffle([...data]);
      setRound(shuffled);
    }
  }, [data]);

  // 7) Eğer data geçersizse, HOOK’lar yine de çağrıldıktan sonra return yap
  if (!data) {
    return (
      <div className="tournament-container">
        <h2>Kategori Bulunamadı</h2>
      </div>
    );
  }

  // 8) Kazanan belli olduysa ekranda göster
  if (winner) {
    return (
      <div className="tournament-container">
        <h1>{category.toUpperCase()} </h1>
        <h2>Kazanan: {winner.name}</h2>
        <img className="winner-image" src={winner.image} alt={winner.name} />
      </div>
    );
  }

  // 9) Maçlardaki iki öğeyi hesapla
  const item1 = round[currentMatchIndex * 2];
  const item2 = round[currentMatchIndex * 2 + 1];

  // 10) item1 yoksa (dizi boş veya beklenmedik durum)
  if (!item1) {
    return <div style={styles.container}>Yükleniyor...</div>;
  }

  // 11) Tek öğe kaldıysa otomatik geç
  if (!item2) {
    return (
      <div className="tournament-container">
        <h2 className="single-item">Bu turda tek kaldı: {item1.name}</h2>
        <img className="winner-image" src={item1.image} alt={item1.name} />
        <br />
        <button className="btn" onClick={() => handleChoice(item1)}>Otomatik Geç</button>
      </div>
    );
  }

  // 12) Kullanıcı bir öğeyi seçince winners listesine ekle
  const handleChoice = (chosenItem) => {
    setWinners((prev) => [...prev, chosenItem]);
    setCurrentMatchIndex((prev) => prev + 1);
  };

  // 13) Normal eşleşme ekranı
  return (
    <div className="tournament-container">
      <h1>{category.toUpperCase()} </h1>
      <h2>Maç {currentMatchIndex + 1} / {round.length / 2}</h2>
      <div className="match-container">
        <div className="item-box" onClick={() => handleChoice(item1)}>
          <img src={item1.image} alt={item1.name} />
          <h3>{item1.name}</h3>
        </div>
        <div className="item-box" onClick={() => handleChoice(item2)}>
          <img src={item2.image} alt={item2.name} />
          <h3>{item2.name}</h3>
        </div>
      </div>
    </div>
  );
}

// Basit karıştırma (shuffle) fonksiyonu
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Basit inline CSS
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  matchContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "30px"
  },
  itemBox: {
    cursor: "pointer",
    textAlign: "center"
  }
};

export default Tournament;
