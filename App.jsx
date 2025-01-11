import { useState } from "react";
import Appli from "./component/Appli";
import FAV from "./component/FAV";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1671030495418-4bef8d9bfae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29uZ3N8ZW58MHx8MHx8fDA%3D",
      SongName: "Alpha1",
      Artist: "Lorem1",
      Added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1641935944286-f64230aa1bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZ3N8ZW58MHx8MHx8fDA%3D",
      SongName: "Alpha2",
      Artist: "Lorem2",
      Added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1732697818964-7f3e4a675b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbmdzfGVufDB8fDB8fHww",
      SongName: "Alpha3",
      Artist: "Lorem3",
      Added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633329102203-36effd2ca47d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmdzfGVufDB8fDB8fHww",
      SongName: "Alpha4",
      Artist: "Lorem4",
      Added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1688387969153-39f12756809b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbmdzfGVufDB8fDB8fHww",
      SongName: "Alpha5",
      Artist: "Lorem5",
      Added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1667523143908-b8ba833aaa55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmdzfGVufDB8fDB8fHww",
      SongName: "Alpha6",
      Artist: "Lorem6",
      Added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1581190413988-89cbf448719f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvbmdzfGVufDB8fDB8fHww",
      SongName: "Alpha7",
      Artist: "Lorem7",
      Added: false,
    },
  ];

  const [Song, setSong] = useState(data);

  return (
    <div>
      <FAV />
      <div className="flex justify-center flex-wrap">
        {Song.map((obj, index) => (
          <Appli key={index} data={obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
