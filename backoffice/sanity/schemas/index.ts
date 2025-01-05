import { prototype } from "easymde";
import { landing } from "./base/landing";
import video from "./definitions/video";
import photo from "./definitions/photo";
import setting from "./document/setting";
import homeBlog from "./document/homeBlog";
import heroHomeBlog from "./objects/heroHomeBlog";
import summary from "./objects/summary";
import post from "./document/post";
import author from "./document/author";
import category from "./document/category";
import legal from "./document/legal";

export const schemaTypes = [
    // sort exports schemas base, definitios, objects, sections, document. FROM LESS TO MORE
  
    // definitions
    photo,
    video,

    // objects
    heroHomeBlog,
    summary,

    // sections


    // documents
    homeBlog,
    author,
    post,
    category,
    legal,
    setting,
   



]
