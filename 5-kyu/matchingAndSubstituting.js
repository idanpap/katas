function switchTitle(line, prog) {
  line[0] = "Program";
  line[1] = ": " + prog;
}

function switchAuthor(line) {
  line[1] = ": g964";
}

function switchDate(line) {
  line[1] = ": 2019-01-01";
}

function switchVersion(line, version) {
  line[1] = ": " + version;
}

function switchPhone(line) {
  line[1] = ": +1-503-555-0090";
}

function change(s, prog, version) {
  newS = s.split("\n");
  for (let i = 0; i < newS.length; i++) {
    newS[i] = newS[i].split(":");
    if (newS[i][0] === "Program title") {
      switchTitle(newS[i], prog);
    }

    if (newS[i][0] === "Author") {
      switchAuthor(newS[i]);
    }
    if (newS[i][0] === "Date") {
      switchDate(newS[i]);
    }
    if (newS[i][0] === "Version") {
      let existingVersion = newS[i][1].trim().split(".");
      if (existingVersion.length !== 2 || existingVersion[0] === "") {
        return "ERROR: VERSION or PHONE";
      }
    }
    if (newS[i][0] == "Version" && newS[i][1].trim() !== "2.0") {
      switchVersion(newS[i], version);
    } else if (newS[i][0] == "Version" && newS[i][1].trim() === "2.0") {
      newS[i][0] += ":";
    }
    if (newS[i][0] === "Phone") {
      let phone = newS[i][1].split("-");
      if (
        phone[0].trim() !== "+1" ||
        phone[1].length !== 3 ||
        phone[2].length !== 3 ||
        phone[3].length !== 4
      ) {
        return "ERROR: VERSION or PHONE";
      }
      switchPhone(newS[i]);
    }

    if (newS[i][0] === "Corporation" || newS[i][0] === "Level") {
      newS.splice(i, 1);
      i--;
      continue;
    }

    newS[i] = newS[i].join("");
  }
  return newS.join(" ");
}

const s1 =
  "Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha";
change(s1, "Ladder", "1.1");

// 'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1'
// https://www.codewars.com/kata/59de1e2fe50813a046000124/train/javascript
