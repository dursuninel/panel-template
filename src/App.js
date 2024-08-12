// src/App.js
import React, { Suspense, useState } from "react";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Topbar from "./layout/Topbar";
import { Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";

import Loader from "./components/Loader";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} />
      <div className="content_flex">
        <Topbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="content">
          <Content>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route index element={<>Anasayfa</>} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/news" element={<>Haberler</>} />
                <Route path="*" element={<>Hatalı Sayfa</>} />
              </Routes>
            </Suspense>
          </Content>
        </div>
      </div>
    </div>
  );
}

export default App;
