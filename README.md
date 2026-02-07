# 🚀 Nigam Kumar — Portfolio Website

A modern, responsive **personal portfolio website** built using **React**, **Tailwind CSS**, and **interactive particle animations**, showcasing my skills, projects, and professional journey.

---

## ✨ Live Preview

🔗 **Website:** [https://nigamyadav.netlify.app/](https://nigamyadav.netlify.app/)

📦 **Repository:** [https://github.com/Nigam-kumar-0](https://github.com/Nigam-kumar-0)

---

## 📸 Preview

![Portfolio Preview](https://nigamyadav.netlify.app/profile.jpg)

---

## 🧩 Features

* 🌙 **Dark / Light Mode** with smooth transitions
* 🎇 **Animated Particles Background**
* ⚡ **Fast & Responsive UI**
* 📱 **Mobile-First Design**
* 🧠 **Clean Component Architecture**
* 🛠 **Reusable Components**
* 📬 **Contact Section**
* 🧭 **Timeline / Experience Section**

---

## 🛠 Tech Stack

| Technology            | Usage                 |
| --------------------- | --------------------- |
| **React**             | Frontend framework    |
| **Tailwind CSS**      | Styling & dark mode   |
| **JavaScript (ES6+)** | Logic                 |
| **Vite**              | Build tool            |
| **tsParticles**       | Background animations |

---

## 📂 Project Structure

```bash
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Home.jsx
 │   ├─ About.jsx
 │   ├─ Skills.jsx
 │   ├─ Timeline.jsx
 │   ├─ Projects.jsx
 │   ├─ Contact.jsx
 │   └─ ParticlesBackground.jsx
 │
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
public/
 ├─ favicon.svg
 ├─ profile.jpg
```

---

## ⚙️ How It Works

### 🌗 Dark Mode Logic

Dark mode is controlled using React state and Tailwind’s `dark:` classes:

```js
const [isDarkMode, setIsDarkMode] = useState(true);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDarkMode]);
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Nigam-kumar-0/portfolio.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Open 👉 `http://localhost:5173`

---

## 🌍 Deployment

This portfolio is deployed using **Netlify**.

🔗 Live URL: [https://nigamyadav.netlify.app/](https://nigamyadav.netlify.app/)

---

## 📈 SEO Optimized

* Meta tags
* Open Graph preview
* Twitter cards
* Canonical URL
* Favicon & theme color

---

## 👨‍💻 Author

**Nigam Kumar**
💼 Software Developer
🌐 Portfolio: [https://nigamyadav.netlify.app/](https://nigamyadav.netlify.app/)
🐙 GitHub: [https://github.com/Nigam-kumar-0](https://github.com/Nigam-kumar-0)
📸 Instagram: [https://instagram.com/_siddharth_nigam_05](https://instagram.com/_siddharth_nigam_05)

---

## ⭐ Support

If you like this project, please consider giving it a **⭐ star** — it really helps!

---

## 📜 License

This project is licensed under the **MIT License
