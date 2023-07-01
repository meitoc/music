import React, { useState } from "react";
import PropTypes from 'prop-types';
const MusicPlayerContext = React.createContext();

import Track1 from "../music/Quan-Ho-Luong-Giac-Minh-Ngoc.mp3"
import Track2 from "../music/Cong-Thuc-Nhan-Doi-Mai-Ky.mp3"
import Track3 from "../music/Bai-Rap-Tom-Tat-Ly-Thuyet-Vat-Ly-lop-12-Zarily.mp3"
import Track4 from "../music/Bai-Rap-Tom-Tat-Ly-Thuyet-Vat-Ly-lop-12-Phan-2-Zarily.mp3"
const defaultValues = {
    audioPlayer: new Audio(),
    tracks:[
        {
            name: "Quan Họ Lượng Giác",
            file: Track1,
        },
        {
            name: "Công thức nhân đôi",
            file: Track2,
        },
        {
            name: "Rap Vật Lý 12 Phần 1",
            file: Track3,
        },
        {
            name: "Rap Vật Lý 12 Phần 2",
            file: Track4,
        },
    ],
    currentTrackIndex: null,
    isPlaying: false,
}

const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
MusicPlayerProvider.propTypes = {
    children: PropTypes.node.isRequired
    };
export { MusicPlayerContext, MusicPlayerProvider };