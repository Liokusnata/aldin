import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const questions = [
  {
    question: "1. Apa arti kewarganegaraan?",
    options: ["Tempat tinggal seseorang", "Hubungan hukum antara warga dan negara", "Kebangsaan seseorang", "Negara asal orang tua"],
    answer: "Hubungan hukum antara warga dan negara",
  },
  {
    question: "2. Siapa yang disebut warga negara Indonesia?",
    options: ["Semua orang yang tinggal di Indonesia", "Semua orang yang lahir di dunia", "Orang yang diakui sebagai WNI berdasarkan hukum", "Orang yang bekerja di Indonesia"],
    answer: "Orang yang diakui sebagai WNI berdasarkan hukum",
  },
  {
    question: "3. Apa dasar hukum kewarganegaraan di Indonesia?",
    options: ["UUD 1945 Pasal 28", "UUD 1945 Pasal 26", "UU No. 17 Tahun 2011", "PP No. 44 Tahun 2012"],
    answer: "UUD 1945 Pasal 26",
  },
  {
    question: "4. Kewajiban utama warga negara adalah...",
    options: ["Membayar pajak dan ikut lomba", "Melanggar aturan", "Menjadi pejabat", "Menjaga keamanan dan mentaati hukum"],
    answer: "Menjaga keamanan dan mentaati hukum",
  },
  {
    question: "5. Hak warga negara Indonesia adalah...",
    options: ["Memiliki rumah", "Mendapat pendidikan dan perlindungan hukum", "Menjadi tentara", "Melanggar aturan"],
    answer: "Mendapat pendidikan dan perlindungan hukum",
  },
  {
    question: "6. Siapa yang membuat peraturan di Indonesia?",
    options: ["Guru", "Presiden", "DPR dan pemerintah", "Kepala sekolah"],
    answer: "DPR dan pemerintah",
  },
  {
    question: "7. Sila ke-3 Pancasila adalah...",
    options: ["Ketuhanan", "Kemanusiaan", "Persatuan Indonesia", "Keadilan sosial"],
    answer: "Persatuan Indonesia",
  },
  {
    question: "8. Apa simbol negara Indonesia?",
    options: ["Bendera", "Garuda Pancasila", "Peta", "Monas"],
    answer: "Garuda Pancasila",
  },
  {
    question: "9. Warna bendera Indonesia adalah...",
    options: ["Merah dan biru", "Putih dan hijau", "Merah dan putih", "Kuning dan hitam"],
    answer: "Merah dan putih",
  },
  {
    question: "10. Pemilihan umum diadakan setiap berapa tahun?",
    options: ["2 tahun", "3 tahun", "5 tahun", "10 tahun"],
    answer: "5 tahun",
  },
  {
    question: "11. Apa arti demokrasi?",
    options: ["Pemerintah yang kuat", "Rakyat memilih pemimpin", "Pemerintah berkuasa penuh", "Rakyat harus diam"],
    answer: "Rakyat memilih pemimpin",
  },
  {
    question: "12. Apa pentingnya gotong royong?",
    options: ["Mengurangi pekerjaan", "Membuat orang kaya", "Menambah teman", "Membantu sesama dan mempererat persatuan"],
    answer: "Membantu sesama dan mempererat persatuan",
  },
  {
    question: "13. Pancasila adalah...",
    options: ["Lambang negara", "Dasar negara Indonesia", "Bendera negara", "Hukum tertinggi"],
    answer: "Dasar negara Indonesia",
  },
  {
    question: "14. Negara Indonesia berbentuk...",
    options: ["Kerajaan", "Republik", "Monarki", "Koloni"],
    answer: "Republik",
  },
  {
    question: "15. Lagu kebangsaan Indonesia adalah...",
    options: ["Indonesia Tanah Airku", "Indonesia Raya", "Hari Merdeka", "Bagimu Negeri"],
    answer: "Indonesia Raya",
  },
  {
    question: "16. Siapa presiden pertama Indonesia?",
    options: ["Soeharto", "B.J. Habibie", "Ir. Soekarno", "Joko Widodo"],
    answer: "Ir. Soekarno",
  },
  {
    question: "17. Menghormati guru termasuk...",
    options: ["Kewajiban", "Hak", "Pilihan", "Hiburan"],
    answer: "Kewajiban",
  },
  {
    question: "18. Tanggung jawab siswa di sekolah adalah...",
    options: ["Berjualan", "Belajar dan mengikuti aturan", "Tidur", "Menggambar di dinding"],
    answer: "Belajar dan mengikuti aturan",
  },
  {
    question: "19. Menjaga kebersihan lingkungan termasuk sikap...",
    options: ["Negatif", "Abaikan", "Peduli", "Kotor"],
    answer: "Peduli",
  },
  {
    question: "20. Siapa yang bertugas menjaga keamanan negara?",
    options: ["Dokter", "Polisi dan Tentara", "Petani", "Guru"],
    answer: "Polisi dan Tentara",
  },
];

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(answers).length < questions.length) {
      toast.error("Harap jawab semua soal terlebih dahulu.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setSubmitted(true);
    toast.success(`Jawaban berhasil dikumpulkan! Nilai Anda: ${newScore} / ${questions.length}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Kuis <span className="legal-siteSign">Kewarganegaraan</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">Kuis Pilihan Ganda</h2>

        <form className="form-content" onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={index} className="quiz-question">
              <p>{q.question}</p>
              {q.options.map((option, i) => (
                <label key={i} className="quiz-option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    disabled={submitted}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}

          {!submitted && (
            <button type="submit" className="text-appointment-btn">
              Kumpulkan Jawaban
            </button>
          )}
        </form>

        {submitted && (
          <div className="quiz-result">
            <h3>Nilai Anda: {score} / {questions.length}</h3>
            <p>
              {score >= 15
                ? "🎉 Hebat! Kamu sudah paham tentang kewarganegaraan."
                : "📘 Terus belajar ya! Kamu pasti bisa lebih baik."}
            </p>
          </div>
        )}
      </div>

      <div className="legal-footer">
        <p>© 2025 Pusat Edukasi Kewarganegaraan RI. Hak cipta dilindungi.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
