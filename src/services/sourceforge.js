import request from "../helpers/request";
import { getToday, getTimestamp } from "../helpers/utils";

const baseURL = "https://sourceforge.net/projects/catalystproject";

const fetchDownloadsCount = async (filename, codename) => {
  try {
    const res = await request(
      `${baseURL}/files/${codename}/${filename}/stats/json?start_date=2019-04-06&end_date=${getToday()}`,
    );
    return res.total;
  } catch (err) {
    return 0;
  }
};

const generateDownloadURL = (filename, codename) => {
  if (codename === "munch") {
    const downloadBase = `https://sourceforge.net/projects/catalystproject/files/${codename}/`;
    return `${downloadBase}`;
  } else {
    const downloadBase = `https://downloads.sourceforge.net/project/catalystproject/${codename}/${filename}`;
    return `${downloadBase}?r=&ts=${getTimestamp()}&use_mirror=autoselect`;
  }
};

export { fetchDownloadsCount, generateDownloadURL };
