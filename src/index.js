import React from "react";
import "@/style/index.scss";
import 'antd/dist/reset.css';
import { createRoot } from 'react-dom/client'
import App from "@/App";

const root = createRoot(document.getElementById('root'));

root.render(<App />);
