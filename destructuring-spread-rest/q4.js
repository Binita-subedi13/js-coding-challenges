 function Merge(defaultConfig, userConfig){
    return {...defaultConfig,...userConfig};
 }
 
 const DefaultConfig = { dark: false, lang: "en" }
 const UserConfig = { dark: true }

 console.log(Merge(DefaultConfig, UserConfig));