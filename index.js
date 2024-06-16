// t.me/andraz404 (skidders/tukan recode)
const _0x250576 = _0x113b;
(function (_0x1ae34a, _0x20b571) {
  const _0x1eeb68 = _0x113b,
    _0x513627 = _0x1ae34a();
  while (!![]) {
    try {
      const _0x3a2bea =
        (parseInt(_0x1eeb68(0xc8)) / 0x1) *
          (-parseInt(_0x1eeb68(0x18c)) / 0x2) +
        (parseInt(_0x1eeb68(0xf4)) / 0x3) *
          (-parseInt(_0x1eeb68(0x102)) / 0x4) +
        (-parseInt(_0x1eeb68(0x15d)) / 0x5) *
          (parseInt(_0x1eeb68(0x18d)) / 0x6) +
        parseInt(_0x1eeb68(0xc2)) / 0x7 +
        (-parseInt(_0x1eeb68(0xec)) / 0x8) * (parseInt(_0x1eeb68(0xd7)) / 0x9) +
        (parseInt(_0x1eeb68(0x1a2)) / 0xa) *
          (-parseInt(_0x1eeb68(0x17c)) / 0xb) +
        parseInt(_0x1eeb68(0x14a)) / 0xc;
      if (_0x3a2bea === _0x20b571) break;
      else _0x513627["push"](_0x513627["shift"]());
    } catch (_0x2839d4) {
      _0x513627["push"](_0x513627["shift"]());
    }
  }
})(_0x1f08, 0xe9432);
const readline = require(_0x250576(0x10d)),
  Table = require(_0x250576(0xc0)),
  axios = require(_0x250576(0xab)),
  fs = require("fs"),
  path = require(_0x250576(0x188)),
  WebSocket = require("ws"),
  asciiArt =
    "\x0a\x20\x20_______\x20__\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20|\x20\x20\x20_\x20\x20\x20|__.--.--.-----|\x20\x20.--.--.-----.----.-----.-----.\x0a\x20|.\x20\x201\x20\x20\x20|\x20\x20|_\x20\x20\x20_|\x20\x20-__|\x20\x20|\x20\x20|\x20\x20|\x20\x20-__|\x20\x20\x20_|__\x20--|\x20\x20-__|\x0a\x20|.\x20\x20____|__|__.__|_____|__|\x5c___/|_____|__|\x20|_____|_____|\x0a\x20|:\x20\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20|::.|\x20\x20v1.3\x20\x20|\x20\x20t.me\x20:\x20cracked\x20";
async function promptUser(_0x3eabdb) {
  const _0x43dc53 = _0x250576,
    _0x3cf117 = readline[_0x43dc53(0x178)]({
      input: process[_0x43dc53(0x1a5)],
      output: process[_0x43dc53(0x17a)],
    });
  return new Promise((_0x30a4c2) =>
    _0x3cf117["question"](_0x3eabdb, (_0x5ec9e3) => {
      const _0x348314 = _0x43dc53;
      _0x3cf117[_0x348314(0x155)](), _0x30a4c2(_0x5ec9e3);
    })
  );
}
async function checkLicense(_0x40e1a5, _0x2e958f) {
  const _0x2daa8b = _0x250576,
    _0x5bba02 = _0x2daa8b(0xe5),
    _0x1b7f13 = { purchase_code: _0x40e1a5, email: _0x2e958f },
    _0xd8f993 = {
      Accept: _0x2daa8b(0x119),
      "Content-Type": _0x2daa8b(0x119),
      "User-Agent": _0x2daa8b(0x131),
    };
  for (let _0x5ceb1f = 0x0; _0x5ceb1f < 0x5; _0x5ceb1f++) {
    try {
      const _0x187445 = await axios[_0x2daa8b(0xbb)](_0x5bba02, _0x1b7f13, {
        headers: _0xd8f993,
      });
      if (_0x187445[_0x2daa8b(0xfa)] === 0xc8)
        return (
          console[_0x2daa8b(0x125)](
            _0x187445[_0x2daa8b(0x17e)]["message"],
            _0x187445[_0x2daa8b(0xfa)]
          ),
          !![]
        );
      else {
        if (_0x187445[_0x2daa8b(0xfa)] === 0x1ad)
          console[_0x2daa8b(0x125)](_0x2daa8b(0x137), _0x187445["data"]),
            await new Promise((_0x23c50c) => setTimeout(_0x23c50c, 0x1388));
        else
          return (
            console["log"](_0x2daa8b(0x17b) + _0x187445[_0x2daa8b(0xfa)]), ![]
          );
      }
    } catch (_0x23e01b) {
      return (
        console[_0x2daa8b(0x125)](
          _0x2daa8b(0x13f) + _0x23e01b[_0x2daa8b(0x116)]
        ),
        ![]
      );
    }
  }
  return ![];
}
async function getLicense() {
  const _0x24337e = _0x250576;
  if (fs[_0x24337e(0x192)](_0x24337e(0x153))) {
    const [_0x4b40cc, _0x3ce7bd] = fs["readFileSync"](
      "license.txt",
      _0x24337e(0xc4)
    )["split"](",");
    if (_0x4b40cc && _0x3ce7bd)
      return { purchase_code: _0x4b40cc, email: _0x3ce7bd };
  }
  const _0x641b96 = await promptUser(_0x24337e(0x152)),
    _0x311d0c = await promptUser(_0x24337e(0xfd));
  return (
    fs[_0x24337e(0x108)](_0x24337e(0x153), _0x641b96 + "," + _0x311d0c, "utf8"),
    { purchase_code: _0x641b96, email: _0x311d0c }
  );
}
async function mainMenu() {
  const _0x965889 = _0x250576;
  console[_0x965889(0x149)]();
  let _0x35f55c = !![];
  while (_0x35f55c) {
    console[_0x965889(0x149)](),
      console[_0x965889(0x125)](asciiArt),
      console[_0x965889(0x125)]("Note:"),
      console[_0x965889(0x125)](_0x965889(0x196)),
      console[_0x965889(0x125)](_0x965889(0x170)),
      console[_0x965889(0x125)](""),
      console["log"](_0x965889(0xeb)),
      console[_0x965889(0x125)](_0x965889(0x1ad)),
      console[_0x965889(0x125)](_0x965889(0xf3)),
      console[_0x965889(0x125)]("4.\x20Auto\x20Combo"),
      console["log"](_0x965889(0x194)),
      console["log"]("6.\x20Exit"),
      console[_0x965889(0x125)](""),
      console[_0x965889(0x125)](_0x965889(0x197));
    const _0x41019a = await promptUser("»\x20");
    switch (_0x41019a) {
      case "1":
        await claimAndFight();
        break;
      case "2":
        await buyPet();
        break;
      case "3":
        await upgradePetTools();
        break;
      case "4":
        await combo();
        break;
      case "5":
        await clearTask();
        break;
      case "6":
        _0x35f55c = ![];
        break;
      default:
        console[_0x965889(0xe4)](_0x965889(0x104));
        break;
    }
    if (_0x35f55c) {
      const _0x19a413 = await promptUser(
        "Kembali\x20ke\x20menu\x20utama?\x20(y/n):\x20"
      );
      _0x19a413["toLowerCase"]() !== "y" && (_0x35f55c = ![]);
    }
  }
  console[_0x965889(0x125)](_0x965889(0x11f));
}
function sleep(_0x344a7a) {
  return new Promise((_0x2c7c4b) => setTimeout(_0x2c7c4b, _0x344a7a));
}
async function bacaFile() {
  const _0x46d3fa = _0x250576;
  try {
    const _0x41ff77 = await fs[_0x46d3fa(0xc5)][_0x46d3fa(0x141)](
        _0x46d3fa(0xb1),
        "utf8"
      ),
      _0x46dbf7 = _0x41ff77[_0x46d3fa(0x105)](/\r\n/g, "\x0a")
        [_0x46d3fa(0x105)](/\r/g, "\x0a")
        [_0x46d3fa(0x159)]("\x0a\x0a")
        [_0x46d3fa(0x160)]((_0x4fda27) => {
          const _0x5be42a = _0x46d3fa,
            _0x924ba0 = _0x4fda27["split"]("\x0a")[_0x5be42a(0x160)](
              (_0x464e9b) => _0x464e9b[_0x5be42a(0xef)]()
            ),
            _0xceac95 = _0x924ba0[0x0],
            _0x37e2aa = _0x924ba0[0x1],
            _0xa082ed = _0x924ba0[0x2],
            _0x27c235 = _0x924ba0[0x3];
          return {
            initData: _0xceac95,
            secret: _0x37e2aa,
            tgId: _0xa082ed,
            username: _0x27c235,
          };
        });
    return _0x46dbf7;
  } catch (_0x5f1e82) {
    console[_0x46d3fa(0xe4)](_0x46d3fa(0x136), _0x5f1e82[_0x46d3fa(0x116)]);
    throw _0x5f1e82;
  }
}
function tampilkanTabelAkunBuyPet(_0x7d81fd) {
  const _0x4b4e37 = _0x250576,
    _0x36858e = new Table({
      head: ["No", "ID", _0x4b4e37(0xb3)],
      colWidths: [0x4, 0x14, 0x14],
    });
  _0x7d81fd["forEach"]((_0x25916a, _0x304495) => {
    const _0x3435a8 = _0x4b4e37;
    _0x36858e[_0x3435a8(0xf2)]([
      _0x304495 + 0x1,
      _0x25916a[_0x3435a8(0x1a8)],
      _0x25916a["username"],
    ]);
  }),
    console[_0x4b4e37(0x125)](
      "\x0aSilahkan\x20pilih\x20akun\x20yang\x20ingin\x20diloginkan:"
    ),
    console[_0x4b4e37(0x125)](_0x36858e[_0x4b4e37(0x16e)]());
}
function pilihAkun(_0x586a42, _0xdeeda0) {
  const _0x27ffb8 = _0x250576;
  if (_0xdeeda0 >= 0x1 && _0xdeeda0 <= _0x586a42[_0x27ffb8(0x12b)])
    return _0x586a42[_0xdeeda0 - 0x1];
  else throw new Error(_0x27ffb8(0xfc));
}
async function checkPriceAndAvailability(
  _0x483a0c,
  _0x31aacd,
  _0xb2f318,
  _0x216490
) {
  const _0x510990 = _0x250576;
  try {
    const _0x3c6c36 = await axios["get"](
        "https://api-clicker.pixelverse.xyz/api/pets",
        {
          headers: {
            Initdata: _0x483a0c,
            Secret: _0x31aacd,
            "Tg-Id": _0xb2f318,
            Username: _0x216490,
          },
        }
      ),
      _0x5d0db7 = _0x3c6c36["data"]["buyPrice"],
      _0x5a7ffd = new Date(_0x3c6c36[_0x510990(0x17e)][_0x510990(0x11a)]),
      _0x556da7 = new Date(),
      _0x2ffe53 = _0x556da7 - _0x5a7ffd,
      _0x125280 = _0x2ffe53 / (0x3e8 * 0x3c * 0x3c);
    if (_0x125280 >= 0x18)
      return (
        console[_0x510990(0x125)](_0x510990(0x127), _0x5d0db7),
        console[_0x510990(0x125)](_0x510990(0xcd)),
        !![]
      );
    else {
      if (!_0x5a7ffd || _0x5a7ffd["toString"]() === _0x510990(0x182))
        return console[_0x510990(0x125)](_0x510990(0x185)), !![];
      else {
        const _0x57af89 = new Date(
          _0x5a7ffd[_0x510990(0xe0)]() + 0x18 * 0x3c * 0x3c * 0x3e8
        );
        return (
          console[_0x510990(0x125)](
            _0x510990(0x10f),
            _0x5a7ffd[_0x510990(0xe6)]()
          ),
          console["log"](_0x510990(0x16f), _0x57af89[_0x510990(0xe6)]()),
          ![]
        );
      }
    }
  } catch (_0x142568) {
    return (
      console[_0x510990(0xe4)](
        "\x1b[31mError\x20checking\x20price\x20and\x20availability:\x1b[0m",
        _0x142568
      ),
      ![]
    );
  }
}
async function checkBalance(_0x2f4d8f, _0x35ab44, _0x266450, _0x3450ef) {
  const _0x5eb951 = _0x250576;
  try {
    const _0x3d4bdd = await axios[_0x5eb951(0x145)](_0x5eb951(0xcf), {
      headers: {
        Initdata: _0x2f4d8f,
        Secret: _0x35ab44,
        "Tg-Id": _0x266450,
        Username: _0x3450ef,
      },
    });
    return _0x3d4bdd[_0x5eb951(0x17e)]["clicksCount"];
  } catch (_0x11cc5a) {
    return (
      console[_0x5eb951(0xe4)](
        "\x1b[31mError\x20checking\x20balance:\x1b[0m",
        _0x11cc5a
      ),
      -0x1
    );
  }
}
async function buyPetAction(_0x59d01f, _0x3368eb, _0x15292e, _0x1df3d3) {
  const _0x27df79 = _0x250576;
  try {
    const _0x454ca7 = await axios[_0x27df79(0xbb)](
      _0x27df79(0x1a7),
      {},
      {
        params: { "tg-id": _0x15292e, secret: _0x27df79(0x143) },
        headers: {
          Initdata: _0x59d01f,
          Secret: _0x3368eb,
          "Tg-Id": _0x15292e,
          Username: _0x1df3d3,
        },
      }
    );
    console[_0x27df79(0x125)](_0x27df79(0x1a0)),
      console[_0x27df79(0x125)](_0x27df79(0x11d)),
      console[_0x27df79(0x125)](_0x27df79(0xd9));
    const _0x2b3b30 = _0x454ca7[_0x27df79(0x17e)],
      _0xd6509c = new Table({
        head: [
          _0x27df79(0x129),
          _0x27df79(0x103),
          "Energy",
          _0x27df79(0xfe),
          _0x27df79(0x139),
        ],
        colWidths: [0x19, 0xa, 0xa, 0x14, 0xf],
      });
    _0xd6509c[_0x27df79(0xf2)]([
      _0x2b3b30[_0x27df79(0x176)]["name"],
      _0x2b3b30[_0x27df79(0xc9)],
      _0x2b3b30[_0x27df79(0xd1)],
      _0x2b3b30[_0x27df79(0x171)],
      _0x2b3b30[_0x27df79(0x11e)],
    ]),
      console[_0x27df79(0x125)](_0xd6509c["toString"]());
  } catch (_0x1bd5fa) {
    _0x1bd5fa["response"] &&
    _0x1bd5fa[_0x27df79(0x158)]["data"] &&
    _0x1bd5fa[_0x27df79(0x158)][_0x27df79(0x17e)][_0x27df79(0xd3)] ===
      _0x27df79(0xf7)
      ? console["log"](
          _0x27df79(0x12e),
          new Date()[_0x27df79(0xe6)](),
          "\x20untuk\x20dapat\x20membeli\x20kembali."
        )
      : console[_0x27df79(0xe4)](_0x27df79(0x138), _0x1bd5fa);
  }
}
async function buyPet() {
  const _0x1f0e90 = _0x250576;
  console["log"](_0x1f0e90(0xde));
  try {
    const _0x16afc3 = await bacaFile();
    tampilkanTabelAkunBuyPet(_0x16afc3);
    const _0x2dc9ea = await promptUser(_0x1f0e90(0x16d));
    if (_0x2dc9ea[_0x1f0e90(0xae)]() === "y") {
      console[_0x1f0e90(0x149)]();
      for (const _0x1b3719 of _0x16afc3) {
        const {
            initData: _0x3fc5c7,
            secret: _0x346870,
            tgId: _0x3bc11a,
            username: _0x228ace,
          } = _0x1b3719,
          _0x819be0 = await axios[_0x1f0e90(0x145)](_0x1f0e90(0xcf), {
            headers: {
              Initdata: _0x3fc5c7,
              Secret: _0x346870,
              "Tg-Id": _0x3bc11a,
              Username: _0x228ace,
            },
          });
        console[_0x1f0e90(0x125)](""),
          console["log"]("\x1b[2m===\x20Informasi\x20Akun\x20===\x1b[0m"),
          console[_0x1f0e90(0x125)]("\x1b[0mUsername:\x1b[33m", _0x228ace),
          console[_0x1f0e90(0x125)](
            _0x1f0e90(0xd6),
            _0x819be0[_0x1f0e90(0x17e)][_0x1f0e90(0x14d)]
          ),
          console["log"](
            _0x1f0e90(0x15a),
            _0x819be0[_0x1f0e90(0x17e)][_0x1f0e90(0xaf)]
          ),
          await sleep(0x7d0);
        const _0x28ee31 = await axios[_0x1f0e90(0x145)](
          "https://api-clicker.pixelverse.xyz/api/pets",
          {
            headers: {
              Initdata: _0x3fc5c7,
              Secret: _0x346870,
              "Tg-Id": _0x3bc11a,
              Username: _0x228ace,
            },
          }
        );
        console[_0x1f0e90(0x125)](""),
          console[_0x1f0e90(0x125)](_0x1f0e90(0xb5));
        const _0x43a68e = new Table({
          head: [
            "No",
            _0x1f0e90(0x110),
            _0x1f0e90(0x103),
            "Damage",
            _0x1f0e90(0xd4),
            "Max\x20Energy",
          ],
          colWidths: [0x5, 0x14, 0xa, 0xa, 0x14, 0xf],
        });
        _0x28ee31[_0x1f0e90(0x17e)]["data"][_0x1f0e90(0x1ac)](
          (_0x153987, _0x19f17a) => {
            const _0x2782cb = _0x1f0e90;
            _0x43a68e[_0x2782cb(0xf2)]([
              _0x19f17a + 0x1,
              _0x153987[_0x2782cb(0x169)],
              _0x153987[_0x2782cb(0x12f)][_0x2782cb(0xc9)],
              _0x153987["userPet"][_0x2782cb(0x15c)][0x0][_0x2782cb(0x19f)],
              _0x153987[_0x2782cb(0x12f)][_0x2782cb(0x15c)][0x1][
                _0x2782cb(0x19f)
              ],
              _0x153987[_0x2782cb(0x12f)][_0x2782cb(0x15c)][0x2][
                _0x2782cb(0x19f)
              ],
            ]);
          }
        ),
          console[_0x1f0e90(0x125)](_0x43a68e[_0x1f0e90(0x16e)]()),
          await sleep(0x7d0);
        const _0x2abd69 = await checkPriceAndAvailability(
          _0x3fc5c7,
          _0x346870,
          _0x3bc11a,
          _0x228ace
        );
        if (_0x2abd69) {
          const _0x3726db = await checkBalance(
              _0x3fc5c7,
              _0x346870,
              _0x3bc11a,
              _0x228ace
            ),
            _0x275370 = await axios["get"](
              "https://api-clicker.pixelverse.xyz/api/pets",
              {
                headers: {
                  Initdata: _0x3fc5c7,
                  Secret: _0x346870,
                  "Tg-Id": _0x3bc11a,
                  Username: _0x228ace,
                },
              }
            ),
            _0x415168 = _0x275370[_0x1f0e90(0x17e)][_0x1f0e90(0x151)];
          console[_0x1f0e90(0x125)](_0x1f0e90(0x19b), _0x228ace),
            console[_0x1f0e90(0x125)]("Uangkamu:", _0x3726db),
            console[_0x1f0e90(0x125)](_0x1f0e90(0xe2), _0x415168),
            _0x3726db >= _0x415168
              ? (await buyPetAction(_0x3fc5c7, _0x346870, _0x3bc11a, _0x228ace),
                await sleep(0xbb8),
                console["log"](_0x1f0e90(0x14c)))
              : console[_0x1f0e90(0x125)](_0x1f0e90(0x135));
        } else console[_0x1f0e90(0x125)](_0x1f0e90(0x13a), _0x228ace);
      }
      console[_0x1f0e90(0x125)]("\x0aSemua\x20akun\x20telah\x20diproses.");
    } else {
      if (_0x2dc9ea[_0x1f0e90(0xae)]() === "n") {
        const _0x214c90 = await promptUser(_0x1f0e90(0x15e));
        try {
          const _0x5513ff = pilihAkun(_0x16afc3, parseInt(_0x214c90)),
            {
              initData: _0x409c01,
              secret: _0x53e5a6,
              tgId: _0x671144,
              username: _0x500f57,
            } = _0x5513ff,
            _0x15bbf3 = await axios[_0x1f0e90(0x145)](
              "https://api-clicker.pixelverse.xyz/api/users",
              {
                headers: {
                  Initdata: _0x409c01,
                  Secret: _0x53e5a6,
                  "Tg-Id": _0x671144,
                  Username: _0x500f57,
                },
              }
            );
          console["log"](""),
            console[_0x1f0e90(0x125)](_0x1f0e90(0xf6)),
            console[_0x1f0e90(0x125)](_0x1f0e90(0x13c), _0x500f57),
            console[_0x1f0e90(0x125)](
              _0x1f0e90(0xd6),
              _0x15bbf3["data"][_0x1f0e90(0x14d)]
            ),
            console[_0x1f0e90(0x125)](
              _0x1f0e90(0x15a),
              _0x15bbf3[_0x1f0e90(0x17e)][_0x1f0e90(0xaf)]
            );
          const _0x2271c2 = await axios[_0x1f0e90(0x145)](_0x1f0e90(0xff), {
            headers: {
              Initdata: _0x409c01,
              Secret: _0x53e5a6,
              "Tg-Id": _0x671144,
              Username: _0x500f57,
            },
          });
          console[_0x1f0e90(0x125)](""),
            console[_0x1f0e90(0x125)](_0x1f0e90(0xb5));
          const _0x2820dd = new Table({
            head: [
              "No",
              "Nama",
              "Level",
              _0x1f0e90(0x123),
              _0x1f0e90(0xd4),
              _0x1f0e90(0x139),
            ],
            colWidths: [0x5, 0x14, 0xa, 0xa, 0x14, 0xf],
          });
          _0x2271c2[_0x1f0e90(0x17e)][_0x1f0e90(0x17e)][_0x1f0e90(0x1ac)](
            (_0xf143f4, _0x19599a) => {
              const _0x2ec91b = _0x1f0e90;
              _0x2820dd[_0x2ec91b(0xf2)]([
                _0x19599a + 0x1,
                _0xf143f4["name"],
                _0xf143f4[_0x2ec91b(0x12f)][_0x2ec91b(0xc9)],
                _0xf143f4[_0x2ec91b(0x12f)][_0x2ec91b(0x15c)][0x0][
                  "currentValue"
                ],
                _0xf143f4["userPet"]["stats"][0x1][_0x2ec91b(0x19f)],
                _0xf143f4[_0x2ec91b(0x12f)][_0x2ec91b(0x15c)][0x2][
                  _0x2ec91b(0x19f)
                ],
              ]);
            }
          ),
            console[_0x1f0e90(0x125)](_0x2820dd[_0x1f0e90(0x16e)]());
          const _0x233e4e = await checkPriceAndAvailability(
            _0x409c01,
            _0x53e5a6,
            _0x671144,
            _0x500f57
          );
          if (_0x233e4e) {
            const _0x2eef2f = await checkBalance(
                _0x409c01,
                _0x53e5a6,
                _0x671144,
                _0x500f57
              ),
              _0x53c449 = await axios[_0x1f0e90(0x145)](_0x1f0e90(0xff), {
                headers: {
                  Initdata: _0x409c01,
                  Secret: _0x53e5a6,
                  "Tg-Id": _0x671144,
                  Username: _0x500f57,
                },
              }),
              _0x311640 = _0x53c449[_0x1f0e90(0x17e)][_0x1f0e90(0x151)];
            console[_0x1f0e90(0x125)](_0x1f0e90(0x12d), _0x2eef2f),
              console[_0x1f0e90(0x125)](_0x1f0e90(0xe2), _0x311640),
              _0x2eef2f >= _0x311640
                ? await buyPetAction(_0x409c01, _0x53e5a6, _0x671144, _0x500f57)
                : console[_0x1f0e90(0x125)](_0x1f0e90(0x135));
          }
        } catch (_0x4e471f) {
          console[_0x1f0e90(0xe4)]("\x1b[31mError:\x1b[0m", _0x4e471f);
        }
      } else console[_0x1f0e90(0x125)]("Pilihan\x20tidak\x20valid.");
    }
  } catch (_0x438486) {
    console["error"](_0x1f0e90(0x17d), _0x438486);
  }
}
function generateRandomNumber(_0x168a10, _0x365c67) {
  const _0x130765 = _0x250576;
  return (
    Math[_0x130765(0xb2)](
      Math[_0x130765(0x133)]() * (_0x365c67 - _0x168a10 + 0x1)
    ) + _0x168a10
  );
}
const randomNumber = generateRandomNumber(0xc350, 0xfde8);
function bacaFile() {
  return new Promise((_0x124d62, _0xd862c3) => {
    const _0x32aa78 = _0x113b;
    fs[_0x32aa78(0x141)](
      _0x32aa78(0xb1),
      _0x32aa78(0xc4),
      (_0xa10eca, _0x4dddac) => {
        const _0x389891 = _0x32aa78;
        if (_0xa10eca) _0xd862c3(_0xa10eca);
        else {
          const _0x3f4eb6 = _0x4dddac["split"]("\x0a")
              [_0x389891(0x160)]((_0x28f1d3) => _0x28f1d3[_0x389891(0xef)]())
              [_0x389891(0x18f)]((_0x2201e8) => _0x2201e8),
            _0x33e208 = [];
          for (
            let _0x101749 = 0x0;
            _0x101749 < _0x3f4eb6["length"];
            _0x101749 += 0x4
          ) {
            _0x33e208["push"]({
              initData: _0x3f4eb6[_0x101749],
              secret: _0x3f4eb6[_0x101749 + 0x1],
              tgId: _0x3f4eb6[_0x101749 + 0x2],
              username: _0x3f4eb6[_0x101749 + 0x3],
            });
          }
          _0x124d62(_0x33e208);
        }
      }
    );
  });
}
async function loginClaimAndFight(_0x5dc222) {
  const _0xe3cbdc = _0x250576,
    {
      initData: _0x26e909,
      secret: _0x1f0092,
      tgId: _0x33a30b,
      username: _0x5c35b3,
    } = _0x5dc222;
  try {
    const _0x22bc93 = await axios[_0xe3cbdc(0x145)](
      "https://api-clicker.pixelverse.xyz/api/users",
      {
        headers: {
          Initdata: _0x26e909,
          Secret: _0x1f0092,
          "Tg-Id": _0x33a30b,
          Username: _0x5c35b3,
        },
      }
    );
    return (
      console[_0xe3cbdc(0x125)](""),
      console["log"](_0xe3cbdc(0x181)),
      console[_0xe3cbdc(0x125)](_0xe3cbdc(0x13c), _0x5c35b3),
      console["log"](
        "\x1b[0mTelegramID:\x1b[33m",
        _0x22bc93["data"][_0xe3cbdc(0x14d)]
      ),
      console["log"](_0xe3cbdc(0x15a), _0x22bc93["data"][_0xe3cbdc(0xaf)]),
      _0x22bc93[_0xe3cbdc(0x17e)]
    );
  } catch (_0x59c210) {
    console[_0xe3cbdc(0xe4)]("\x1b[31mLogin\x20gagal:\x1b[0m", _0x59c210);
  }
}
async function claim(_0x72d3fc) {
  const _0xd0081e = _0x250576,
    {
      initData: _0x2a99ca,
      secret: _0x17c763,
      tgId: _0x57bf6c,
      username: _0x5d504d,
    } = _0x72d3fc;
  try {
    const _0xe91b86 = await axios[_0xd0081e(0xbb)](_0xd0081e(0x122), null, {
      headers: {
        Initdata: _0x2a99ca,
        Secret: _0x17c763,
        "Tg-Id": _0x57bf6c,
        Username: _0x5d504d,
      },
    });
    return (
      console[_0xd0081e(0x125)](""),
      console[_0xd0081e(0x125)](_0xd0081e(0xda)),
      console["log"](
        "\x1b[0mKlaim\x20Farming:\x20\x1b[32m" +
          _0xe91b86[_0xd0081e(0x17e)][_0xd0081e(0xed)] +
          "\x1b[0m"
      ),
      console["log"](
        _0xd0081e(0xaa) +
          _0xe91b86[_0xd0081e(0x17e)][_0xd0081e(0x174)] +
          _0xd0081e(0x16b)
      ),
      await checkDailyReward(_0x72d3fc),
      _0xe91b86["data"]
    );
  } catch (_0x197fca) {
    console[_0xd0081e(0xe4)]("\x1b[31mClaim\x20gagal:\x1b[0m", _0x197fca);
  }
}
async function checkDailyReward(_0x1af6dd) {
  const _0x43e4dd = _0x250576,
    {
      initData: _0x19a9c8,
      secret: _0x2c4016,
      tgId: _0x181ea4,
      username: _0x3eccc5,
    } = _0x1af6dd;
  try {
    const _0x379c35 = await axios[_0x43e4dd(0x145)](_0x43e4dd(0xdf), {
      headers: {
        Initdata: _0x19a9c8,
        Secret: _0x2c4016,
        "Tg-Id": _0x181ea4,
        Username: _0x3eccc5,
      },
    });
    if (!_0x379c35[_0x43e4dd(0x17e)][_0x43e4dd(0x199)]) return;
    await claimDailyReward(_0x1af6dd);
  } catch (_0x392981) {
    console[_0x43e4dd(0xe4)](_0x43e4dd(0x132), _0x392981);
  }
}
async function claimDailyReward(_0x209c4d) {
  const _0x36ea32 = _0x250576,
    {
      initData: _0xa963b8,
      secret: _0x2b50ec,
      tgId: _0x4b3741,
      username: _0x559965,
    } = _0x209c4d;
  try {
    const _0x2d0e67 = await axios[_0x36ea32(0xbb)](_0x36ea32(0x13d), null, {
        headers: {
          Initdata: _0xa963b8,
          Secret: _0x2b50ec,
          "Tg-Id": _0x4b3741,
          Username: _0x559965,
        },
      }),
      { day: _0x2a30e3, amount: _0x5c7300 } = _0x2d0e67[_0x36ea32(0x17e)];
    console[_0x36ea32(0x125)](
      _0x36ea32(0x146) +
        _0x2a30e3 +
        "\x20:\x20\x1b[32m" +
        _0x5c7300 +
        _0x36ea32(0x16b)
    );
  } catch (_0x5a68c2) {
    console[_0x36ea32(0xe4)](_0x36ea32(0x189), _0x5a68c2);
  }
}
function handleWebSocketMessage(_0x3052ad, _0x54d3ec, _0x1d1264) {
  const _0x2476d6 = _0x250576;
  if (_0x3052ad["includes"](_0x2476d6(0xc3))) {
    const _0x32fd9a = JSON[_0x2476d6(0x113)](_0x3052ad[_0x2476d6(0x19d)](0x2)),
      _0x569744 = _0x32fd9a[0x1][_0x2476d6(0x120)],
      _0x512f79 = _0x32fd9a[0x1][_0x2476d6(0x148)],
      _0x4b942c = _0x32fd9a[0x1]["player2"];
    console[_0x2476d6(0x125)](
      "\x1b[0mMusuh\x20ditemukan:\x20\x1b[32m" +
        _0x512f79[_0x2476d6(0x168)] +
        _0x2476d6(0xf9) +
        _0x4b942c["username"] +
        _0x2476d6(0x16b)
    );
    const _0x4a1d4c =
      Math[_0x2476d6(0xb2)](Math[_0x2476d6(0x133)]() * (0x96 - 0x64 + 0x1)) +
      0x64;
    _0x1d1264[_0x2476d6(0x193)] = setInterval(() => {
      const _0x1dca8c = _0x2476d6;
      _0x54d3ec[_0x1dca8c(0x144)](
        _0x1dca8c(0xf8) + _0x569744 + _0x1dca8c(0x128)
      );
    }, _0x4a1d4c);
  } else {
    if (_0x3052ad[_0x2476d6(0xb8)]("42[\x22HIT\x22")) {
      const _0x3f21af = JSON[_0x2476d6(0x113)](_0x3052ad["slice"](0x2)),
        _0x3b2331 = _0x3f21af[0x1][_0x2476d6(0x148)],
        _0x32fdf9 = _0x3f21af[0x1][_0x2476d6(0x10e)];
      process[_0x2476d6(0x17a)]["write"](
        _0x2476d6(0x167) +
          _0x3b2331[_0x2476d6(0xd1)][_0x2476d6(0x19a)](0x1) +
          "\x20\x1b[2mVS\x1b[0m\x20" +
          _0x32fdf9[_0x2476d6(0xd1)][_0x2476d6(0x19a)](0x1) +
          _0x2476d6(0x14b)
      );
    } else {
      if (_0x3052ad[_0x2476d6(0xb8)](_0x2476d6(0x11c))) {
        const _0x336cbb = JSON[_0x2476d6(0x113)](
          _0x3052ad[_0x2476d6(0x19d)](0x2)
        );
        console[_0x2476d6(0x125)](
          _0x2476d6(0x157),
          _0x2476d6(0xf0) + _0x336cbb[0x1]["reward"] + _0x2476d6(0x16b)
        ),
          clearInterval(_0x1d1264[_0x2476d6(0x193)]),
          _0x54d3ec["close"]();
      } else {
        if (_0x3052ad["includes"](_0x2476d6(0x175))) {
          const _0xb29f3f = JSON["parse"](_0x3052ad[_0x2476d6(0x19d)](0x2));
          console["log"](
            _0x2476d6(0x107),
            _0x2476d6(0x106) + _0xb29f3f[0x1][_0x2476d6(0x10b)] + "\x1b[0m"
          ),
            clearInterval(_0x1d1264[_0x2476d6(0x193)]),
            _0x54d3ec["close"]();
        } else {
          if (_0x3052ad[_0x2476d6(0xb8)]("41"))
            console[_0x2476d6(0x125)](_0x2476d6(0xe8)),
              clearInterval(_0x1d1264[_0x2476d6(0x193)]),
              _0x54d3ec[_0x2476d6(0x155)]();
          else {
            if (_0x3052ad["includes"]("42[\x22SET_SUPER_HIT_ATTACK_ZONE\x22")) {
              const _0x260ceb = JSON[_0x2476d6(0x113)](_0x3052ad["slice"](0x2)),
                _0x951b9b = _0x260ceb[0x1],
                _0x5cafea =
                  Math[_0x2476d6(0xb2)](Math[_0x2476d6(0x133)]() * 0x4) + 0x1;
              _0x54d3ec[_0x2476d6(0x144)](
                _0x2476d6(0xea) +
                  _0x951b9b +
                  "\x22,\x20\x22zone\x22:\x20" +
                  _0x5cafea +
                  "}]"
              );
            } else {
              if (_0x3052ad[_0x2476d6(0xb8)](_0x2476d6(0xac))) {
                const _0x1254ec = JSON["parse"](_0x3052ad["slice"](0x2)),
                  _0x391649 = _0x1254ec[0x1],
                  _0x203dc7 =
                    Math[_0x2476d6(0xb2)](Math[_0x2476d6(0x133)]() * 0x4) + 0x1;
                _0x54d3ec[_0x2476d6(0x144)](
                  _0x2476d6(0xe3) +
                    _0x391649 +
                    _0x2476d6(0x17f) +
                    _0x203dc7 +
                    "}]"
                );
              }
            }
          }
        }
      }
    }
  }
}
async function battle(_0x25cdfb) {
  const _0xef5335 = _0x250576,
    {
      initData: _0x5772c2,
      secret: _0x1d99e2,
      tgId: _0x3a9303,
      username: _0x92e2b7,
    } = _0x25cdfb,
    _0x59563b = new WebSocket(_0xef5335(0x1a6)),
    _0x50ee85 = { current: null };
  _0x59563b["on"](_0xef5335(0xdc), () => {
    const _0x139e93 = _0xef5335;
    console["log"](""),
      console["log"](_0x139e93(0x114)),
      console[_0x139e93(0x125)]("\x1b[0mMemasuki\x20Arena\x1b[0m"),
      _0x59563b[_0x139e93(0x144)](
        "40{\x22tg-id\x22:" +
          _0x3a9303 +
          _0x139e93(0x183) +
          _0x1d99e2 +
          _0x139e93(0xca) +
          _0x5772c2 +
          "\x22}"
      );
  }),
    _0x59563b["on"]("message", (_0xfb1ad1) =>
      handleWebSocketMessage(_0xfb1ad1, _0x59563b, _0x50ee85)
    ),
    _0x59563b["on"](_0xef5335(0xe4), (_0x58dbe2) => {
      const _0x4bb092 = _0xef5335;
      console[_0x4bb092(0xe4)]("\x1b[31mWebSocket\x20Error:\x1b[0m", _0x58dbe2);
    }),
    _0x59563b["on"](_0xef5335(0x155), () => {
      getInfoAfterBattle(_0x25cdfb);
    });
}
async function getInfoAfterBattle(_0x17a9f2) {
  const _0x3985cc = _0x250576,
    {
      initData: _0x397211,
      secret: _0xc3fa54,
      tgId: _0x3eac11,
      username: _0x4030a5,
    } = _0x17a9f2;
  try {
    const _0x3af7f2 = await axios["get"](_0x3985cc(0xcf), {
      headers: {
        Initdata: _0x397211,
        Secret: _0xc3fa54,
        "Tg-Id": _0x3eac11,
        Username: _0x4030a5,
      },
    });
    await new Promise((_0xf6b68e) => setTimeout(_0xf6b68e, 0x7d0)),
      console[_0x3985cc(0x125)](""),
      console[_0x3985cc(0x125)](_0x3985cc(0x172)),
      console["log"](
        _0x3985cc(0x15a),
        _0x3af7f2[_0x3985cc(0x17e)][_0x3985cc(0xaf)]
      ),
      console["log"](""),
      console["log"](_0x3985cc(0x198)),
      await new Promise((_0x483a95) => setTimeout(_0x483a95, 0x7d0));
  } catch (_0x36ad84) {
    console["error"](_0x3985cc(0x165), _0x36ad84);
  }
}
function promptUser(_0x293eea) {
  const _0x31318d = _0x250576,
    _0x2c250e = require(_0x31318d(0x10d))[_0x31318d(0x178)]({
      input: process[_0x31318d(0x1a5)],
      output: process[_0x31318d(0x17a)],
    });
  return new Promise((_0x12cd0c) => {
    const _0x225a06 = _0x31318d;
    _0x2c250e[_0x225a06(0xa9)](_0x293eea, (_0x3548bd) => {
      const _0x41302d = _0x225a06;
      _0x2c250e[_0x41302d(0x155)](), _0x12cd0c(_0x3548bd);
    });
  });
}
async function listAndSelectPet(_0x26ab6d) {
  const _0x8161be = _0x250576,
    {
      initData: _0xa30056,
      secret: _0x401c37,
      tgId: _0x161379,
      username: _0x3b9896,
    } = _0x26ab6d;
  try {
    const _0x5f96dc = await axios[_0x8161be(0x145)](_0x8161be(0xff), {
      headers: {
        Initdata: _0xa30056,
        Secret: _0x401c37,
        "Tg-Id": _0x161379,
        Username: _0x3b9896,
      },
    });
    console[_0x8161be(0x125)](""),
      console[_0x8161be(0x125)](
        "\x1b[2m===\x20Daftar\x20Pet\x20Tersedia\x20===\x1b[0m"
      );
    const _0x5a1da9 = new Table({
      head: [
        "No",
        _0x8161be(0x129),
        "Level",
        _0x8161be(0x123),
        _0x8161be(0xd4),
        _0x8161be(0x139),
      ],
      colWidths: [0x5, 0x14, 0xa, 0xa, 0x14, 0xf],
    });
    _0x5f96dc[_0x8161be(0x17e)][_0x8161be(0x17e)]["forEach"](
      (_0x448ddc, _0x57b873) => {
        const _0x1ceb94 = _0x8161be;
        _0x5a1da9[_0x1ceb94(0xf2)]([
          _0x57b873 + 0x1,
          _0x448ddc["name"],
          _0x448ddc[_0x1ceb94(0x12f)]["level"],
          _0x448ddc["userPet"][_0x1ceb94(0x15c)][0x0][_0x1ceb94(0x19f)],
          _0x448ddc[_0x1ceb94(0x12f)][_0x1ceb94(0x15c)][0x1][_0x1ceb94(0x19f)],
          _0x448ddc["userPet"]["stats"][0x2][_0x1ceb94(0x19f)],
        ]);
      }
    ),
      console[_0x8161be(0x125)](_0x5a1da9[_0x8161be(0x16e)]());
    let _0x503fd6,
      _0x316329 = ![];
    do {
      const _0x5f5abf = await promptUser("Masukkan\x20Nomor\x20Pet:\x20");
      (_0x316329 = validateInput(_0x5f5abf, _0x5f96dc)),
        !_0x316329
          ? isNaN(_0x5f5abf)
            ? console[_0x8161be(0x125)](_0x8161be(0x164))
            : console["log"](
                "Tidak\x20Ada\x20Pet\x20dengan\x20nomor\x20tersebut,\x20Masukkan\x20Nomor\x20Pet:"
              )
          : (_0x503fd6 = parseInt(_0x5f5abf) - 0x1);
    } while (!_0x316329);
    const _0x8d6a09 =
      _0x5f96dc[_0x8161be(0x17e)][_0x8161be(0x17e)][_0x503fd6][
        _0x8161be(0x12f)
      ]["id"];
    try {
      await selectPet(_0xa30056, _0x401c37, _0x161379, _0x3b9896, _0x8d6a09),
        console[_0x8161be(0x125)](
          _0x8161be(0xba) +
            _0x5f96dc[_0x8161be(0x17e)][_0x8161be(0x17e)][_0x503fd6]["name"] +
            _0x8161be(0x130)
        );
    } catch (_0x10e9f2) {
      if (
        _0x10e9f2["response"] &&
        _0x10e9f2[_0x8161be(0x158)][_0x8161be(0x17e)] &&
        _0x10e9f2["response"][_0x8161be(0x17e)][_0x8161be(0xd3)] ===
          _0x8161be(0xf7) &&
        _0x10e9f2[_0x8161be(0x158)]["data"][_0x8161be(0x116)] ===
          _0x8161be(0xce)
      )
        console[_0x8161be(0x125)](
          "Yap!\x20Pet\x20default\x20mu\x20adalah\x20itu"
        );
      else throw _0x10e9f2;
    }
  } catch (_0x101f95) {
    console[_0x8161be(0xe4)](
      "\x1b[31mError\x20saat\x20memilih\x20pet:\x1b[0m",
      _0x101f95
    );
  }
}
function validateInput(_0x4eb477, _0x3551bb) {
  const _0x3e3490 = _0x250576,
    _0x489d97 = parseInt(_0x4eb477),
    _0x5125b8 =
      !isNaN(_0x489d97) &&
      _0x489d97 > 0x0 &&
      _0x489d97 <=
        _0x3551bb[_0x3e3490(0x17e)][_0x3e3490(0x17e)][_0x3e3490(0x12b)] &&
      _0x4eb477[_0x3e3490(0xef)]()[_0x3e3490(0x12b)] === 0x1;
  return _0x5125b8;
}
function _0x1f08() {
  const _0x34b524 = [
    "level",
    "\x22,\x22initData\x22:\x22",
    "\x0aHasil\x20Upgrade\x20Pet:",
    "rewardPointsAmount",
    "Pet\x20tersedia\x20untuk\x20dibeli\x20hari\x20ini.",
    "You\x20have\x20already\x20selected\x20this\x20pet",
    "https://api-clicker.pixelverse.xyz/api/users",
    "Pilih\x20Pet\x20Masing-Masing\x20Akun:\x20",
    "energy",
    "ID\x20:",
    "code",
    "Energy\x20Restoration",
    "exit",
    "\x1b[0mTelegramID:\x1b[33m",
    "8793rPcLWI",
    "DONE",
    "Detail\x20Pet:",
    "\x1b[2m===\x20Feed\x20&\x20Claim\x20===\x1b[0m",
    "Yes",
    "open",
    "Status",
    "Menjalankan\x20Auto\x20Buy\x20Pet...",
    "https://api-clicker.pixelverse.xyz/api/daily-rewards",
    "getTime",
    "Menjalankan\x20Auto\x20Combo...",
    "Harga\x20pet:",
    "42[\x22SET_SUPER_HIT_DEFEND_ZONE\x22,{\x22battleId\x22:\x22",
    "error",
    "https://airdropfamilyidn.com/api/credential/check",
    "toLocaleString",
    "https://api-clicker.pixelverse.xyz/api",
    "\x1b[0mKeluar\x20dari\x20arena\x20pertarungan\x1b[0m",
    "Reward",
    "42[\x22SET_SUPER_HIT_ATTACK_ZONE\x22,{\x22battleId\x22:\x22",
    "1.\x20Auto\x20Claim\x20&\x20Fight",
    "3528OWhshi",
    "claimedAmount",
    "rewardAmount",
    "trim",
    "\x1b[32m",
    "Pilih\x20nomor\x20pet\x20yang\x20ingin\x20di-upgrade:\x20",
    "push",
    "3.\x20Auto\x20Upgrade\x20Pet",
    "252111uzaMwj",
    "Price",
    "\x1b[2m===\x20Informasi\x20Akun\x20===\x1b[0m",
    "BadRequestException",
    "42[\x22HIT\x22,{\x22battleId\x22:\x22",
    "\x1b[0m\x20\x1b[2mVS\x1b[0m\x20\x1b[31m",
    "status",
    "Title",
    "Nomor\x20akun\x20tidak\x20valid.",
    "Masukkan\x20email:\x20",
    "Energy\x20Per\x20Second",
    "https://api-clicker.pixelverse.xyz/api/pets",
    "initData",
    "Task\x20started:\x20",
    "52qqPBNI",
    "Level",
    "Pilihan\x20tidak\x20valid.",
    "replace",
    "\x1b[31m",
    "\x0a\x1b[31mPlayer\x202\x20Reward:\x1b[0m",
    "writeFileSync",
    "userTaskId",
    "title",
    "reward",
    "No\x20accounts\x20to\x20process.\x20Exiting...",
    "readline",
    "player2",
    "\x0aTidak\x20dapat\x20membeli\x20pet\x20hari\x20ini.\x20Pet\x20terakhir\x20dibeli\x20pada:\x20",
    "Nama",
    "Energy\x20restoration",
    "Upgrade\x20pada\x20semua\x20akun\x20dan\x20semua\x20pet?\x20(y/n):\x20",
    "parse",
    "\x1b[2m===\x20Pertarungan\x20===\x1b[0m",
    "Account\x20ke\x20",
    "message",
    "/check",
    "levelUpPrice",
    "application/json",
    "lastBuyAt",
    "Error:",
    "42[\x22END\x22,{\x22result\x22:\x22WIN\x22",
    "Pet\x20berhasil\x20dibeli!",
    "maxEnergy",
    "Terima\x20kasih\x20telah\x20menggunakan\x20bot\x20ini!",
    "battleId",
    "Task\x20completed:\x20",
    "https://api-clicker.pixelverse.xyz/api/mining/claim",
    "Damage",
    "secret",
    "log",
    "Unexpected\x20response\x20structure\x20for\x20pets:",
    "\x0aHarga\x20pet:\x20",
    "\x22}]",
    "Name",
    "isArray",
    "length",
    "Task\x20in\x20progress:\x20",
    "\x0aUangkamu:",
    "\x0aKesempatan\x20untuk\x20beli\x20sudah\x20habis.\x20Tunggu\x20hingga\x20waktu\x20lokal\x20",
    "userPet",
    "\x20berhasil\x20dipilih",
    "PostmanRuntime/7.28.4",
    "\x1b[31mError\x20saat\x20memeriksa\x20daily\x20reward:\x1b[0m",
    "random",
    "\x0aSemua\x20Akun\x20Berhasil\x20Di\x20Eksekusi.",
    "Maaf,\x20saldo\x20Anda\x20tidak\x20mencukupi\x20untuk\x20membeli\x20pet.",
    "Error\x20reading\x20file:",
    "Too\x20many\x20requests.\x20Retrying\x20in\x205\x20seconds...",
    "\x1b[31mError\x20buying\x20pet:\x1b[0m",
    "Max\x20Energy",
    "Pet\x20tidak\x20tersedia\x20untuk\x20dibeli\x20hari\x20ini\x20untuk\x20akun:",
    "/telegram-tasks/subscribe/",
    "\x1b[0mUsername:\x1b[33m",
    "https://api-clicker.pixelverse.xyz/api/daily-rewards/claim",
    "isMaxLevel",
    "Request\x20failed:\x20",
    "\x20(UserTask\x20ID:\x20",
    "readFile",
    "Coba\x20lagi\x20nanti",
    "adwawdasfajfklasjglrejnoierjboivrevioreboidwa",
    "send",
    "get",
    "Klaim\x20Day\x20",
    "/select",
    "player1",
    "clear",
    "38241960gulreq",
    "\x20\x1b[31mPlayer\x202\x1b[0m",
    "Pembelian\x20berhasil.",
    "telegramUserId",
    "Menjalankan\x20Auto\x20Clear\x20Task...",
    "Error\x20checking\x20task\x20status:",
    "Completed\x20Tasks:",
    "buyPrice",
    "Masukkan\x20License:\x20",
    "license.txt",
    "https://api-clicker.pixelverse.xyz/api/cypher-games/current",
    "close",
    "https://api-clicker.pixelverse.xyz/api/pets/user-pets/",
    "\x0a\x1b[32mPlayer\x201\x20Reward:\x1b[0m",
    "response",
    "split",
    "\x1b[0mBalance:\x1b[33m",
    "Failed\x20to\x20start\x20task:\x20",
    "stats",
    "60ECsOkj",
    "\x0aPilih\x20Akun\x20(masukkan\x20nomor):\x20",
    "Error\x20fetching\x20tasks:",
    "map",
    "List\x20Petmu:",
    "Anda\x20Sudah\x20Melakakukan\x20Combo",
    "combo.txt",
    "Gunakan\x20Nomor,\x20Masukkan\x20Nomor\x20Pet:",
    "\x1b[31mError\x20mendapatkan\x20info\x20setelah\x20pertarungan:\x1b[0m",
    "inProgress",
    "\x0d\x1b[K\x1b[32mPlayer\x201\x1b[0m\x20",
    "username",
    "name",
    "Max\x20Level",
    "\x1b[0m",
    "In-Progress\x20Tasks:",
    "\x0aLakukan\x20Mass\x20Buy\x20kepada\x20seluruh\x20akun?\x20(y/n):\x20",
    "toString",
    "Anda\x20dapat\x20membeli\x20kembali\x20pada:\x20",
    "Pastikan\x20sudah\x20upgrade\x20isi\x20combo.txt",
    "energyPerSecond",
    "\x1b[2m===\x20Info\x20Setelah\x20Pertarungan\x20===\x1b[0m",
    "Error\x20reading\x20combo\x20data:",
    "maxAvailable",
    "42[\x22END\x22,{\x22result\x22:\x22LOSE\x22",
    "pet",
    "\x0aAkun\x20ke\x20",
    "createInterface",
    "Login\x20failed\x20for\x20account:",
    "stdout",
    "Error:\x20",
    "611567sRBPcZ",
    "\x1b[31mError:\x1b[0m",
    "data",
    "\x22,\x20\x22zone\x22:\x20",
    "Failed",
    "\x1b[2m===\x20Akun\x20===\x1b[0m",
    "Invalid\x20Date",
    ",\x22secret\x22:\x22",
    "Mass\x20upgrade\x20semua\x20pet?\x20(y/n):\x20",
    "\x0aPet\x20tersedia\x20untuk\x20dibeli\x20hari\x20ini.",
    "find",
    "Max\x20Reward:",
    "path",
    "\x1b[31mError\x20saat\x20melakukan\x20klaim\x20daily\x20reward:\x1b[0m",
    "available",
    "Skipping\x20",
    "5534lmkGbf",
    "178236pdavGQ",
    "type",
    "filter",
    "Account\x20processed\x20successfully:",
    "Error\x20processing\x20account:",
    "existsSync",
    "current",
    "5.\x20Auto\x20Clear\x20Task",
    "petsStat",
    "Pastikan\x20semua\x20akun\x20tersimpan\x20di\x20multi.txt",
    "Pilih\x20Bot\x20Yang\x20Ingin\x20dijalankan:",
    "Delay\x20Random",
    "todaysRewardAvailable",
    "toFixed",
    "\x0aMembeli\x20pet\x20untuk\x20akun:",
    "Failed\x20to\x20upgrade\x20pet\x20",
    "slice",
    "\x0aSilahkan\x20pilih\x20akun\x20yang\x20ingin\x20diloginkan:",
    "currentValue",
    "\x0a===\x20Buy\x20Pet\x20===",
    "\x20as\x20it\x20is\x20already\x20at\x20max\x20level.",
    "150RHPoTc",
    "rewardPercent:",
    "No\x20tasks\x20data\x20available\x20for\x20account:",
    "stdin",
    "wss://api-clicker.pixelverse.xyz/socket.io/?EIO=4&transport=websocket",
    "https://api-clicker.pixelverse.xyz/api/pets/buy",
    "tgId",
    "maxReward",
    "Success",
    "stringify",
    "forEach",
    "2.\x20Auto\x20Buy\x20Pet",
    "question",
    "\x1b[0mMax\x20Available:\x20\x1b[32m",
    "axios",
    "42[\x22SET_SUPER_HIT_DEFEND_ZONE\x22",
    "Max\x20energy",
    "toLowerCase",
    "clicksCount",
    "Status:",
    "multi.txt",
    "floor",
    "Username",
    "/answer",
    "\x1b[2m===\x20Daftar\x20Pet\x20Tersedia\x20===\x1b[0m",
    "rewardPercent",
    ",\x20Reward:\x20",
    "includes",
    "\x20dari\x20",
    "Pet\x20",
    "post",
    "Available\x20Tasks:",
    "\x1b[31mLogin\x20gagal:\x1b[0m",
    "Terjadi\x20kesalahan:",
    "done",
    "cli-table",
    "https://api-clicker.pixelverse.xyz/api/cypher-games/",
    "8819328DxBxxN",
    "42[\x22START\x22",
    "utf8",
    "promises",
    "sudah\x20mencapai\x20level\x20maksimal.",
    "Error\x20starting\x20task:",
    "281WHeEGh",
  ];
  _0x1f08 = function () {
    return _0x34b524;
  };
  return _0x1f08();
}
async function selectPet(
  _0x318f1c,
  _0x31a839,
  _0x2e3a8d,
  _0x463f1e,
  _0x338be2
) {
  const _0xe85a19 = _0x250576,
    _0x4f25e6 = await axios[_0xe85a19(0xbb)](
      _0xe85a19(0x156) + _0x338be2 + _0xe85a19(0x147),
      null,
      {
        headers: {
          Initdata: _0x318f1c,
          Secret: _0x31a839,
          "Tg-Id": _0x2e3a8d,
          Username: _0x463f1e,
        },
      }
    );
  return _0x4f25e6[_0xe85a19(0x17e)];
}
async function processAccountClaimAndFight(_0xe8222b) {
  const _0x153fc9 = _0x250576;
  try {
    await loginClaimAndFight(_0xe8222b),
      await new Promise((_0x1a3f19) => setTimeout(_0x1a3f19, 0x7d0)),
      await listAndSelectPet(_0xe8222b),
      await new Promise((_0x436829) => setTimeout(_0x436829, 0x7d0));
    while (continueLooping) {
      console[_0x153fc9(0x149)](),
        await claim(_0xe8222b),
        await battle(_0xe8222b),
        await new Promise((_0x59e9bc) => setTimeout(_0x59e9bc, randomNumber));
    }
  } catch (_0x2e04e0) {
    console[_0x153fc9(0xe4)](_0x153fc9(0x17d), _0x2e04e0);
  }
}
async function processAllAccountClaimAndFight(_0x9253e2) {
  const _0x50212e = _0x250576;
  try {
    for (const _0x28b975 of _0x9253e2) {
      console["log"](""),
        console["log"](_0x50212e(0xd0)),
        await loginClaimAndFight(_0x28b975),
        await listAndSelectPet(_0x28b975);
    }
    while (!![]) {
      for (const _0x4936c6 of _0x9253e2) {
        console["clear"](),
          await loginClaimAndFight(_0x4936c6),
          await new Promise((_0x5064cf) => setTimeout(_0x5064cf, 0x7d0)),
          await claim(_0x4936c6),
          await battle(_0x4936c6),
          await new Promise((_0x2f4454) => setTimeout(_0x2f4454, randomNumber));
      }
      await new Promise((_0x45767a) => setTimeout(_0x45767a, 0x1388));
    }
  } catch (_0x42e0c3) {
    console[_0x50212e(0xe4)](_0x50212e(0x17d), _0x42e0c3);
  }
}
function tampilkanTabelAkunClaimAndFight(_0x305256) {
  const _0x4ca24d = _0x250576,
    _0x51b7e6 = new Table({
      head: ["No", "ID", "Username"],
      colWidths: [0x4, 0x14, 0x14],
    });
  _0x305256[_0x4ca24d(0x1ac)]((_0x2c6830, _0x2b7e6b) => {
    const _0x1d9077 = _0x4ca24d;
    _0x51b7e6[_0x1d9077(0xf2)]([
      _0x2b7e6b + 0x1,
      _0x2c6830[_0x1d9077(0x1a8)],
      _0x2c6830[_0x1d9077(0x168)],
    ]);
  }),
    console["log"](_0x51b7e6[_0x4ca24d(0x16e)]());
}
let continueLooping = !![];
async function claimAndFight() {
  const _0x2198bf = _0x250576;
  console[_0x2198bf(0x125)]("Menjalankan\x20Auto\x20Claim\x20&\x20Fight...");
  try {
    const _0x566f50 = await bacaFile();
    console[_0x2198bf(0x149)](),
      console["log"]("Daftar\x20Akun:"),
      await tampilkanTabelAkunClaimAndFight(_0x566f50);
    const _0x4156f6 = await promptUser(
      "Lakukan\x20Login,\x20Claim\x20&\x20Fight\x20untuk\x20semua\x20akun?\x20(y/n):\x20"
    );
    if (_0x4156f6["toLowerCase"]() === "y")
      await processAllAccountClaimAndFight(_0x566f50);
    else {
      const _0x4fd053 = await promptUser("Pilih\x20nomor\x20akun:\x20"),
        _0x5e0797 = parseInt(_0x4fd053) - 0x1;
      _0x5e0797 >= 0x0 && _0x5e0797 < _0x566f50["length"]
        ? await processAccountClaimAndFight(_0x566f50[_0x5e0797])
        : console["log"](_0x2198bf(0xfc));
    }
  } catch (_0x2b1d4f) {
    console[_0x2198bf(0xe4)]("\x1b[31mError:\x1b[0m", _0x2b1d4f);
  }
}
let massUpgradeAllPets = ![];
function sleep(_0x346f9b) {
  return new Promise((_0x414e12) => setTimeout(_0x414e12, _0x346f9b));
}
async function bacaFileUpgradePet() {
  const _0x5c2a19 = _0x250576;
  try {
    const _0x23f23e = await fs["promises"][_0x5c2a19(0x141)](
        "multi.txt",
        _0x5c2a19(0xc4)
      ),
      _0x548e0a = _0x23f23e[_0x5c2a19(0x105)](/\r\n/g, "\x0a")
        [_0x5c2a19(0x105)](/\r/g, "\x0a")
        ["split"]("\x0a\x0a")
        [_0x5c2a19(0x160)]((_0x292485) => {
          const _0x431098 = _0x5c2a19,
            _0x4fb4a1 = _0x292485["split"]("\x0a")["map"]((_0xe21c29) =>
              _0xe21c29[_0x431098(0xef)]()
            ),
            _0x203c88 = _0x4fb4a1[0x0],
            _0x3c5006 = _0x4fb4a1[0x1],
            _0x2ffe87 = _0x4fb4a1[0x2],
            _0x320acb = _0x4fb4a1[0x3];
          return {
            initData: _0x203c88,
            secret: _0x3c5006,
            tgId: _0x2ffe87,
            username: _0x320acb,
          };
        });
    return _0x548e0a;
  } catch (_0x1ddc7f) {
    console[_0x5c2a19(0xe4)](_0x5c2a19(0x136), _0x1ddc7f[_0x5c2a19(0x116)]);
    throw _0x1ddc7f;
  }
}
function tampilkanTabelAkunUpgradePet(_0x14439e) {
  const _0x5b5f74 = _0x250576,
    _0x31dd70 = new Table({
      head: ["No", "ID", "Username"],
      colWidths: [0x4, 0x14, 0x14],
    });
  _0x14439e[_0x5b5f74(0x1ac)]((_0x3d3cfb, _0x547f0f) => {
    const _0x137ccf = _0x5b5f74;
    _0x31dd70[_0x137ccf(0xf2)]([
      _0x547f0f + 0x1,
      _0x3d3cfb[_0x137ccf(0x1a8)],
      _0x3d3cfb[_0x137ccf(0x168)],
    ]);
  }),
    console["log"](_0x5b5f74(0x19e)),
    console[_0x5b5f74(0x125)](_0x31dd70[_0x5b5f74(0x16e)]());
}
function promptUser(_0x1d17d0) {
  const _0x25f0d0 = _0x250576,
    _0xbe548c = readline[_0x25f0d0(0x178)]({
      input: process["stdin"],
      output: process["stdout"],
    });
  return new Promise((_0x2122e7) =>
    _0xbe548c[_0x25f0d0(0xa9)](_0x1d17d0, (_0x40b5a9) => {
      const _0x5c4e10 = _0x25f0d0;
      _0xbe548c[_0x5c4e10(0x155)](), _0x2122e7(_0x40b5a9);
    })
  );
}
async function loginUpgradePet(_0x516e44, _0x4f1dc1, _0x4f8fe0, _0x1d0e69) {
  const _0x2910e6 = _0x250576;
  try {
    const _0x1c0ea8 = await axios[_0x2910e6(0x145)](_0x2910e6(0xcf), {
      headers: {
        Initdata: _0x516e44,
        Secret: _0x4f1dc1,
        "Tg-Id": _0x4f8fe0,
        Username: _0x1d0e69,
      },
    });
    return (
      console[_0x2910e6(0x125)](""),
      console["log"]("Login\x20Sebagai:"),
      console[_0x2910e6(0x125)](_0x2910e6(0x13c), _0x1d0e69),
      console[_0x2910e6(0x125)](
        _0x2910e6(0xd6),
        _0x1c0ea8["data"]["telegramUserId"]
      ),
      console[_0x2910e6(0x125)](
        _0x2910e6(0x15a),
        _0x1c0ea8[_0x2910e6(0x17e)][_0x2910e6(0xaf)]
      ),
      _0x1c0ea8["data"]
    );
  } catch (_0x32a25d) {
    console[_0x2910e6(0xe4)]("\x1b[31mLogin\x20gagal:\x1b[0m", _0x32a25d);
  }
}
async function getUserPets(_0x4d337e) {
  const _0x18545d = _0x250576;
  try {
    const _0x477429 = await axios[_0x18545d(0x145)](
      "https://api-clicker.pixelverse.xyz/api/pets",
      {
        headers: {
          Initdata: _0x4d337e["initData"],
          Secret: _0x4d337e[_0x18545d(0x124)],
          "Tg-Id": _0x4d337e[_0x18545d(0x1a8)],
          Username: _0x4d337e[_0x18545d(0x168)],
        },
      }
    );
    return _0x477429[_0x18545d(0x17e)][_0x18545d(0x17e)];
  } catch (_0xa8c2b5) {
    console[_0x18545d(0xe4)](
      "Error\x20fetching\x20pets:",
      _0xa8c2b5[_0x18545d(0x116)]
    );
    throw _0xa8c2b5;
  }
}
async function upgradePet(_0x966e3f, _0x11464a) {
  const _0x209606 = _0x250576;
  try {
    const _0x46aa12 = await axios[_0x209606(0xbb)](
      _0x209606(0x156) + _0x11464a + "/level-up",
      {},
      {
        headers: {
          Initdata: _0x966e3f[_0x209606(0x100)],
          Secret: _0x966e3f[_0x209606(0x124)],
          "Tg-Id": _0x966e3f[_0x209606(0x1a8)],
          Username: _0x966e3f[_0x209606(0x168)],
        },
      }
    );
    return _0x46aa12[_0x209606(0x17e)];
  } catch (_0x4824a2) {
    throw _0x4824a2;
  }
}
async function processAccountUpgradePet(_0xc4f2da) {
  const _0x14e4ad = _0x250576;
  try {
    await loginUpgradePet(
      _0xc4f2da["initData"],
      _0xc4f2da[_0x14e4ad(0x124)],
      _0xc4f2da["tgId"],
      _0xc4f2da["username"]
    ),
      console["log"]("");
    const _0x3b79fd = await getUserPets(_0xc4f2da);
    if (!Array[_0x14e4ad(0x12a)](_0x3b79fd)) {
      console[_0x14e4ad(0xe4)](_0x14e4ad(0x126), _0x3b79fd);
      return;
    }
    const _0x1b7012 = new Table({
      head: [
        "No",
        _0x14e4ad(0x129),
        _0x14e4ad(0x103),
        _0x14e4ad(0x123),
        "Energy\x20Restoration",
        "Max\x20Energy",
        "Price",
        "Max\x20Level",
      ],
      colWidths: [0x5, 0x14, 0xa, 0xa, 0x14, 0xf, 0x14, 0xa],
    });
    _0x3b79fd[_0x14e4ad(0x1ac)]((_0x5c41f9, _0x2ad1ca) => {
      const _0x50e0f7 = _0x14e4ad,
        _0xae615e = _0x5c41f9[_0x50e0f7(0x12f)][_0x50e0f7(0x15c)][
          _0x50e0f7(0x186)
        ](
          (_0x2aa6fa) =>
            _0x2aa6fa[_0x50e0f7(0x195)][_0x50e0f7(0x169)] === _0x50e0f7(0x123)
        )[_0x50e0f7(0x19f)],
        _0x49e412 = _0x5c41f9["userPet"]["stats"][_0x50e0f7(0x186)](
          (_0x39601d) =>
            _0x39601d[_0x50e0f7(0x195)]["name"] === _0x50e0f7(0x111)
        )[_0x50e0f7(0x19f)],
        _0x3b8394 = _0x5c41f9[_0x50e0f7(0x12f)]["stats"][_0x50e0f7(0x186)](
          (_0x5d5622) =>
            _0x5d5622[_0x50e0f7(0x195)][_0x50e0f7(0x169)] === _0x50e0f7(0xad)
        )["currentValue"];
      _0x1b7012[_0x50e0f7(0xf2)]([
        _0x2ad1ca + 0x1,
        _0x5c41f9[_0x50e0f7(0x169)],
        _0x5c41f9[_0x50e0f7(0x12f)][_0x50e0f7(0xc9)],
        _0xae615e,
        _0x49e412,
        _0x3b8394,
        _0x5c41f9[_0x50e0f7(0x12f)][_0x50e0f7(0x118)],
        _0x5c41f9["userPet"][_0x50e0f7(0x13e)] ? _0x50e0f7(0xdb) : "No",
      ]);
    }),
      console[_0x14e4ad(0x125)](_0x14e4ad(0x161)),
      console[_0x14e4ad(0x125)](_0x1b7012["toString"]());
    if (massUpgradeAllPets) {
      const _0x10f64d = new Table({
        head: [
          "No",
          "Name",
          _0x14e4ad(0x103),
          "Damage",
          _0x14e4ad(0xd4),
          _0x14e4ad(0x139),
          _0x14e4ad(0xf5),
          _0x14e4ad(0xdd),
        ],
        colWidths: [0x5, 0x14, 0xa, 0xa, 0x14, 0xf, 0xf, 0xa],
      });
      for (
        let _0x451416 = 0x0;
        _0x451416 < _0x3b79fd[_0x14e4ad(0x12b)];
        _0x451416++
      ) {
        if (_0x3b79fd[_0x451416][_0x14e4ad(0x12f)][_0x14e4ad(0x13e)]) {
          console["log"](
            _0x14e4ad(0x18b) + _0x3b79fd[_0x451416]["name"] + _0x14e4ad(0x1a1)
          ),
            _0x10f64d[_0x14e4ad(0xf2)]([
              _0x451416 + 0x1,
              _0x3b79fd[_0x451416][_0x14e4ad(0x169)],
              _0x3b79fd[_0x451416][_0x14e4ad(0x12f)][_0x14e4ad(0xc9)],
              "-",
              "-",
              "-",
              "-",
              _0x14e4ad(0x16a),
            ]);
          continue;
        }
        try {
          const _0x37a4dc = await upgradePet(
            _0xc4f2da,
            _0x3b79fd[_0x451416][_0x14e4ad(0x12f)]["id"]
          );
          _0x10f64d[_0x14e4ad(0xf2)]([
            _0x451416 + 0x1,
            _0x37a4dc[_0x14e4ad(0x176)][_0x14e4ad(0x169)],
            _0x37a4dc["level"],
            _0x37a4dc[_0x14e4ad(0x15c)][0x0]["currentValue"],
            _0x37a4dc["stats"][0x1][_0x14e4ad(0x19f)],
            _0x37a4dc[_0x14e4ad(0x11e)],
            _0x37a4dc[_0x14e4ad(0x118)],
            _0x14e4ad(0x1aa),
          ]);
        } catch (_0x59fabd) {
          console[_0x14e4ad(0xe4)](
            "Failed\x20to\x20upgrade\x20pet\x20" +
              _0x3b79fd[_0x451416][_0x14e4ad(0x169)] +
              ":\x20" +
              _0x59fabd[_0x14e4ad(0x116)]
          ),
            _0x10f64d[_0x14e4ad(0xf2)]([
              _0x451416 + 0x1,
              _0x3b79fd[_0x451416][_0x14e4ad(0x169)],
              _0x3b79fd[_0x451416]["userPet"]["level"],
              "-",
              "-",
              "-",
              "-",
              _0x14e4ad(0x180),
            ]);
        }
      }
      console["log"](_0x14e4ad(0xcb)),
        console[_0x14e4ad(0x125)](_0x10f64d[_0x14e4ad(0x16e)]());
    } else {
      const _0x5e5c05 = await promptUser(_0x14e4ad(0x184));
      if (_0x5e5c05[_0x14e4ad(0xae)]() === "y") {
        const _0x28083b = new Table({
          head: [
            "No",
            _0x14e4ad(0x129),
            _0x14e4ad(0x103),
            "Damage",
            _0x14e4ad(0xd4),
            _0x14e4ad(0x139),
            "Price",
            "Status",
          ],
          colWidths: [0x5, 0x14, 0xa, 0xa, 0x14, 0xf, 0xf, 0xa],
        });
        for (
          let _0x594855 = 0x0;
          _0x594855 < _0x3b79fd[_0x14e4ad(0x12b)];
          _0x594855++
        ) {
          if (_0x3b79fd[_0x594855][_0x14e4ad(0x12f)][_0x14e4ad(0x13e)]) {
            console[_0x14e4ad(0x125)](
              _0x14e4ad(0x18b) +
                _0x3b79fd[_0x594855][_0x14e4ad(0x169)] +
                _0x14e4ad(0x1a1)
            ),
              _0x28083b[_0x14e4ad(0xf2)]([
                _0x594855 + 0x1,
                _0x3b79fd[_0x594855]["name"],
                _0x3b79fd[_0x594855]["userPet"][_0x14e4ad(0xc9)],
                "-",
                "-",
                "-",
                "-",
                _0x14e4ad(0x16a),
              ]);
            continue;
          }
          try {
            const _0x3ef827 = await upgradePet(
              _0xc4f2da,
              _0x3b79fd[_0x594855][_0x14e4ad(0x12f)]["id"]
            );
            _0x28083b[_0x14e4ad(0xf2)]([
              _0x594855 + 0x1,
              _0x3ef827[_0x14e4ad(0x176)]["name"],
              _0x3ef827[_0x14e4ad(0xc9)],
              _0x3ef827[_0x14e4ad(0x15c)][0x0][_0x14e4ad(0x19f)],
              _0x3ef827["stats"][0x1]["currentValue"],
              _0x3ef827[_0x14e4ad(0x11e)],
              _0x3ef827[_0x14e4ad(0x118)],
              "Success",
            ]);
          } catch (_0x3ddb71) {
            console[_0x14e4ad(0xe4)](
              _0x14e4ad(0x19c) +
                _0x3b79fd[_0x594855]["name"] +
                ":\x20" +
                _0x3ddb71["message"]
            ),
              _0x28083b[_0x14e4ad(0xf2)]([
                _0x594855 + 0x1,
                _0x3b79fd[_0x594855]["name"],
                _0x3b79fd[_0x594855][_0x14e4ad(0x12f)][_0x14e4ad(0xc9)],
                "-",
                "-",
                "-",
                "-",
                _0x14e4ad(0x180),
              ]);
          }
        }
        console["log"](_0x14e4ad(0xcb)),
          console[_0x14e4ad(0x125)](_0x28083b[_0x14e4ad(0x16e)]());
      } else {
        if (_0x5e5c05[_0x14e4ad(0xae)]() === "n") {
          const _0x2b2e91 = await promptUser(_0x14e4ad(0xf1)),
            _0x13754b = parseInt(_0x2b2e91, 0xa) - 0x1;
          if (_0x13754b >= 0x0 && _0x13754b < _0x3b79fd["length"]) {
            if (_0x3b79fd[_0x13754b]["userPet"]["isMaxLevel"])
              console[_0x14e4ad(0x125)](
                _0x14e4ad(0xba) +
                  _0x3b79fd[_0x13754b][_0x14e4ad(0x169)] +
                  _0x14e4ad(0xc6)
              );
            else
              try {
                const _0x36712e = await upgradePet(
                    _0xc4f2da,
                    _0x3b79fd[_0x13754b][_0x14e4ad(0x12f)]["id"]
                  ),
                  _0x366937 = new Table({
                    head: [
                      "Name",
                      "Level",
                      "Damage",
                      _0x14e4ad(0xd4),
                      _0x14e4ad(0x139),
                      _0x14e4ad(0xf5),
                    ],
                    colWidths: [0x14, 0xa, 0xa, 0x14, 0xf, 0xf],
                  });
                _0x366937[_0x14e4ad(0xf2)]([
                  _0x36712e[_0x14e4ad(0x176)][_0x14e4ad(0x169)],
                  _0x36712e[_0x14e4ad(0xc9)],
                  _0x36712e[_0x14e4ad(0x15c)][0x0][_0x14e4ad(0x19f)],
                  _0x36712e[_0x14e4ad(0x15c)][0x1][_0x14e4ad(0x19f)],
                  _0x36712e[_0x14e4ad(0x11e)],
                  _0x36712e[_0x14e4ad(0x118)],
                ]),
                  console[_0x14e4ad(0x125)](_0x14e4ad(0xcb)),
                  console[_0x14e4ad(0x125)](_0x366937[_0x14e4ad(0x16e)]());
              } catch (_0x51ee67) {
                console[_0x14e4ad(0xe4)](
                  "Gagal\x20meng-upgrade\x20pet\x20" +
                    _0x3b79fd[_0x13754b]["name"] +
                    ":\x20" +
                    _0x51ee67["message"]
                );
              }
          } else console["error"]("Nomor\x20pet\x20tidak\x20valid.");
        } else console[_0x14e4ad(0xe4)](_0x14e4ad(0x104));
      }
    }
  } catch (_0x16d92e) {
    console[_0x14e4ad(0xe4)](_0x14e4ad(0xbe), _0x16d92e[_0x14e4ad(0x116)]);
  }
}
async function upgradeAllPets(_0x1ceda0) {
  for (const _0x3b29ed of _0x1ceda0) {
    await processAccountUpgradePet(_0x3b29ed);
  }
}
async function upgradePetTools() {
  const _0x2adf72 = _0x250576;
  console[_0x2adf72(0x125)]("Menjalankan\x20Auto\x20Upgrade\x20Pet...");
  try {
    const _0x37a57c = await bacaFileUpgradePet();
    tampilkanTabelAkunUpgradePet(_0x37a57c);
    const _0x514fcb = await promptUser(_0x2adf72(0x112));
    if (_0x514fcb[_0x2adf72(0xae)]() === "y")
      (massUpgradeAllPets = !![]),
        await sleep(0xbb8),
        await upgradeAllPets(_0x37a57c);
    else {
      if (_0x514fcb[_0x2adf72(0xae)]() === "n") {
        const _0x1bc0f8 = await promptUser(
            "Pilih\x20nomor\x20akun\x20yang\x20ingin\x20di-upgrade\x20pet-nya:\x20"
          ),
          _0xd1b6cf = parseInt(_0x1bc0f8, 0xa);
        if (_0xd1b6cf >= 0x1 && _0xd1b6cf <= _0x37a57c[_0x2adf72(0x12b)]) {
          const _0xc5f272 = _0x37a57c[_0xd1b6cf - 0x1];
          await sleep(0xbb8), await processAccountUpgradePet(_0xc5f272);
        } else console[_0x2adf72(0xe4)](_0x2adf72(0xfc));
      } else console[_0x2adf72(0xe4)](_0x2adf72(0x104));
    }
  } catch (_0x598e26) {
    console[_0x2adf72(0xe4)](_0x2adf72(0xbe), _0x598e26[_0x2adf72(0x116)]);
  }
}
async function readFile() {
  const _0x2b8388 = _0x250576;
  try {
    const _0x412f05 = await fs[_0x2b8388(0xc5)][_0x2b8388(0x141)](
        _0x2b8388(0xb1),
        _0x2b8388(0xc4)
      ),
      _0x2fd0ff = _0x412f05[_0x2b8388(0x105)](/\r\n/g, "\x0a")
        [_0x2b8388(0x105)](/\r/g, "\x0a")
        [_0x2b8388(0x159)]("\x0a\x0a")
        [_0x2b8388(0x160)]((_0x349dae) => {
          const _0x68eb09 = _0x2b8388,
            _0xc69ca7 = _0x349dae[_0x68eb09(0x159)]("\x0a")[_0x68eb09(0x160)](
              (_0x593166) => _0x593166[_0x68eb09(0xef)]()
            ),
            _0x2ab632 = _0xc69ca7[0x0],
            _0xf0f307 = _0xc69ca7[0x1],
            _0x4c8e22 = _0xc69ca7[0x2],
            _0x2ad2c0 = _0xc69ca7[0x3];
          return {
            initData: _0x2ab632,
            secret: _0xf0f307,
            tgId: _0x4c8e22,
            username: _0x2ad2c0,
          };
        });
    return _0x2fd0ff;
  } catch (_0x294d97) {
    console["error"](_0x2b8388(0x136), _0x294d97["message"]);
    throw _0x294d97;
  }
}
async function makeGetRequest(_0x3f16c0, _0x1ad148) {
  const _0x4192f6 = _0x250576;
  try {
    const _0x573822 = await axios["get"](_0x3f16c0, { headers: _0x1ad148 });
    return _0x573822["data"];
  } catch (_0x426495) {
    return console[_0x4192f6(0xe4)](_0x4192f6(0x162)), null;
  }
}
async function makePostRequest(_0x296ccc, _0x451b34, _0x237bbc) {
  const _0x332a43 = _0x250576;
  try {
    const _0x30a2c2 = await axios[_0x332a43(0xbb)](_0x296ccc, _0x237bbc, {
      headers: _0x451b34,
    });
    return _0x30a2c2[_0x332a43(0x17e)];
  } catch (_0x53aec0) {
    return _0x53aec0["response"]
      ? _0x53aec0[_0x332a43(0x158)][_0x332a43(0xfa)]
      : null;
  }
}
function readComboData() {
  const _0x269d20 = _0x250576;
  try {
    const _0x32fb5e = fs["readFileSync"](_0x269d20(0x163), _0x269d20(0xc4)),
      _0x35cd5a = JSON["parse"](_0x32fb5e);
    return _0x35cd5a;
  } catch (_0x497d28) {
    return (
      console[_0x269d20(0xe4)](_0x269d20(0x173), _0x497d28[_0x269d20(0x116)]),
      null
    );
  }
}
async function loginCombo(_0x3fbf7b, _0x173213, _0x1b8dc2, _0x2af7ac) {
  const _0x59339f = _0x250576;
  try {
    const _0x371934 = await axios[_0x59339f(0x145)](_0x59339f(0xcf), {
      headers: {
        Initdata: _0x3fbf7b,
        Secret: _0x173213,
        "Tg-Id": _0x1b8dc2,
        Username: _0x2af7ac,
      },
    });
    return (
      console[_0x59339f(0x125)](""),
      console["log"](_0x59339f(0x181)),
      console[_0x59339f(0x125)](_0x59339f(0x13c), _0x2af7ac),
      console[_0x59339f(0x125)](
        _0x59339f(0xd6),
        _0x371934[_0x59339f(0x17e)]["telegramUserId"]
      ),
      console[_0x59339f(0x125)](
        "\x1b[0mBalance:\x1b[33m",
        _0x371934["data"][_0x59339f(0xaf)]
      ),
      _0x371934[_0x59339f(0x17e)]
    );
  } catch (_0x37ab97) {
    return console["error"](_0x59339f(0xbd), _0x37ab97[_0x59339f(0x116)]), null;
  }
}
async function combo() {
  const _0x33396a = _0x250576;
  console[_0x33396a(0x125)](_0x33396a(0xe1)), console[_0x33396a(0x149)]();
  const _0x24bb1a = await readFile(),
    _0x3df9e0 = readComboData();
  if (_0x24bb1a && _0x3df9e0) {
    const _0xd51dc7 = _0x24bb1a[_0x33396a(0x12b)];
    let _0x57c164 = 0x0;
    for (let _0x5afc45 = 0x0; _0x5afc45 < _0xd51dc7; _0x5afc45++) {
      const _0x4db5c1 = _0x24bb1a[_0x5afc45],
        {
          initData: _0x44d58a,
          secret: _0x4006d6,
          tgId: _0x4843e1,
          username: _0x312364,
        } = _0x4db5c1;
      console[_0x33396a(0x125)](""),
        console["log"](
          _0x33396a(0x115) + (_0x5afc45 + 0x1) + _0x33396a(0xb9) + _0xd51dc7
        );
      const _0x805b37 = {
        Initdata: _0x44d58a,
        Secret: _0x4006d6,
        "Tg-Id": _0x4843e1,
        Username: _0x312364,
        "Content-Type": _0x33396a(0x119),
        "User-Agent":
          "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.0.0\x20Safari/537.36\x20Edg/125.0.0.0",
      };
      try {
        const _0x2e7c48 = await loginCombo(
          _0x44d58a,
          _0x4006d6,
          _0x4843e1,
          _0x312364
        );
        if (_0x2e7c48) {
          const _0x80afde = await makeGetRequest(_0x33396a(0x154), _0x805b37);
          if (_0x80afde && _0x80afde["id"]) {
            console[_0x33396a(0x125)](_0x33396a(0xd2), _0x80afde["id"]),
              console[_0x33396a(0x125)](
                _0x33396a(0xb0),
                JSON[_0x33396a(0x1ab)](_0x80afde[_0x33396a(0xfa)])
              ),
              console["log"](_0x33396a(0x187), _0x80afde[_0x33396a(0x1a9)]);
            const _0x1a7a38 = _0x3df9e0;
            await new Promise((_0x26510b) => setTimeout(_0x26510b, 0xbb8));
            const _0x35e0e9 = await makePostRequest(
              _0x33396a(0xc1) + _0x80afde["id"] + _0x33396a(0xb4),
              _0x805b37,
              _0x1a7a38
            );
            _0x35e0e9 &&
              (_0x35e0e9 === 0x1f4
                ? console["log"](_0x33396a(0x142))
                : (console["log"]("rewardAmount:", _0x35e0e9[_0x33396a(0xee)]),
                  console[_0x33396a(0x125)](
                    _0x33396a(0x1a3),
                    _0x35e0e9[_0x33396a(0xb6)]
                  ),
                  console["log"](_0x33396a(0x190), _0x312364)));
          }
        } else console[_0x33396a(0xe4)](_0x33396a(0x179), _0x312364);
      } catch (_0x5ad8cc) {
        console[_0x33396a(0xe4)](
          _0x33396a(0x191),
          _0x312364,
          _0x5ad8cc[_0x33396a(0x116)]
        );
      } finally {
        _0x57c164++;
        _0x57c164 === _0xd51dc7 && console[_0x33396a(0x125)](_0x33396a(0x134));
        continue;
      }
    }
  }
}
function delay(_0x2c4f1b) {
  return new Promise((_0x414246) => setTimeout(_0x414246, _0x2c4f1b));
}
function readFile() {
  return new Promise((_0x472fa7, _0x3b4948) => {
    const _0x149ce = _0x113b;
    fs[_0x149ce(0x141)]("multi.txt", "utf8", (_0x1dc45d, _0x213086) => {
      const _0x4dbbf2 = _0x149ce;
      if (_0x1dc45d) _0x3b4948(_0x1dc45d);
      else {
        const _0x501bff = _0x213086[_0x4dbbf2(0x159)](/\n\s*\n/)["map"](
          (_0x4e891e) => {
            const _0x2a0743 = _0x4dbbf2,
              _0x2d1f11 = _0x4e891e["split"]("\x0a")[_0x2a0743(0x160)](
                (_0xd13f74) => _0xd13f74[_0x2a0743(0xef)]()
              ),
              _0x4bb392 = _0x2d1f11[0x0],
              _0x185589 = _0x2d1f11[0x1],
              _0x4f4f98 = _0x2d1f11[0x2],
              _0x2b0849 = _0x2d1f11[0x3];
            return {
              initData: _0x4bb392,
              secret: _0x185589,
              tgId: _0x4f4f98,
              username: _0x2b0849,
            };
          }
        );
        _0x472fa7(_0x501bff);
      }
    });
  });
}
function _0x113b(_0x55b138, _0x2321ff) {
  const _0x1f0880 = _0x1f08();
  return (
    (_0x113b = function (_0x113b6b, _0x1425ac) {
      _0x113b6b = _0x113b6b - 0xa9;
      let _0x46af2e = _0x1f0880[_0x113b6b];
      return _0x46af2e;
    }),
    _0x113b(_0x55b138, _0x2321ff)
  );
}
async function executeTasks() {
  const _0x460c07 = _0x250576;
  console["clear"]();
  try {
    const _0xe16e82 = await readFile();
    if (_0xe16e82["length"] === 0x0) {
      console[_0x460c07(0x125)](_0x460c07(0x10c));
      return;
    }
    for (
      let _0x594780 = 0x0;
      _0x594780 < _0xe16e82[_0x460c07(0x12b)];
      _0x594780++
    ) {
      const _0xdffdbb = _0xe16e82[_0x594780];
      console["clear"](),
        console[_0x460c07(0x125)](
          _0x460c07(0x177) +
            (_0x594780 + 0x1) +
            _0x460c07(0xb9) +
            _0xe16e82["length"]
        ),
        await processAccountClearTask(_0xdffdbb);
    }
    await delay(0xbb8), executeTasks();
  } catch (_0x3d04e9) {
    console[_0x460c07(0xe4)](_0x460c07(0x136), _0x3d04e9);
  }
}
const baseURL = _0x250576(0xe7);
async function getTasks(_0x69b5a5) {
  const _0x3d5b27 = _0x250576;
  try {
    const _0x3d794c = await axios["get"](baseURL + "/tasks/my", {
      headers: _0x69b5a5,
    });
    return _0x3d794c[_0x3d5b27(0x17e)];
  } catch (_0x577356) {
    console["error"](_0x3d5b27(0x15f), _0x577356["message"]);
  }
}
async function startTask(_0x2a3fd1, _0x260148) {
  const _0x4d23a1 = _0x250576;
  try {
    const _0x4f1b6c = await axios[_0x4d23a1(0xbb)](
      baseURL + "/tasks/start/" + _0x2a3fd1,
      null,
      { headers: _0x260148 }
    );
    return _0x4f1b6c[_0x4d23a1(0x17e)];
  } catch (_0x371f41) {
    _0x371f41[_0x4d23a1(0x158)] &&
    _0x371f41[_0x4d23a1(0x158)]["data"] &&
    _0x371f41[_0x4d23a1(0x158)][_0x4d23a1(0x17e)][_0x4d23a1(0x116)]
      ? console[_0x4d23a1(0xe4)](
          _0x4d23a1(0xc7),
          _0x371f41[_0x4d23a1(0x158)][_0x4d23a1(0x17e)][_0x4d23a1(0x116)]
        )
      : console[_0x4d23a1(0xe4)](_0x4d23a1(0xc7), _0x371f41[_0x4d23a1(0x116)]);
  }
}
async function checkTaskStatus(_0x427633, _0x5db886) {
  const _0x4bb0f0 = _0x250576;
  try {
    const _0x38616d = await axios["post"](
      baseURL + _0x4bb0f0(0x13b) + _0x427633 + _0x4bb0f0(0x117),
      null,
      { headers: _0x5db886 }
    );
    return _0x38616d[_0x4bb0f0(0x17e)];
  } catch (_0x427d55) {
    _0x427d55["response"] &&
    _0x427d55[_0x4bb0f0(0x158)][_0x4bb0f0(0x17e)] &&
    _0x427d55[_0x4bb0f0(0x158)][_0x4bb0f0(0x17e)][_0x4bb0f0(0x116)]
      ? console["error"](
          "Error\x20checking\x20task\x20status:",
          _0x427d55["response"][_0x4bb0f0(0x17e)][_0x4bb0f0(0x116)]
        )
      : console[_0x4bb0f0(0xe4)](_0x4bb0f0(0x14f), _0x427d55["message"]);
  }
}
function displayTasks(_0x123c22, _0x52e12a) {
  const _0x4cf237 = _0x250576,
    _0x28983c = new Table({
      head: ["Type", _0x4cf237(0xfb), _0x4cf237(0xe9), "ID"],
    });
  _0x52e12a[_0x4cf237(0x1ac)]((_0x3cf576) => {
    const _0x5d3568 = _0x4cf237;
    _0x28983c[_0x5d3568(0xf2)]([
      _0x3cf576[_0x5d3568(0x18e)],
      _0x3cf576[_0x5d3568(0x10a)],
      _0x3cf576["rewardPointsAmount"],
      _0x3cf576["id"],
    ]);
  }),
    console["log"]("\x0a" + _0x123c22 + "\x0a"),
    console[_0x4cf237(0x125)](_0x28983c[_0x4cf237(0x16e)]());
}
async function processAccountClearTask(_0x453552) {
  const _0x43c48e = _0x250576;
  async function _0x56290d(_0x204091, _0x2560b5, _0x50da82, _0x98de41) {
    const _0x5c9f53 = _0x113b;
    try {
      const _0x5e735b = await axios[_0x5c9f53(0x145)](
        "https://api-clicker.pixelverse.xyz/api/users",
        {
          headers: {
            Initdata: _0x204091,
            Secret: _0x2560b5,
            "Tg-Id": _0x50da82,
            Username: _0x98de41,
          },
        }
      );
      return (
        console[_0x5c9f53(0x125)](""),
        console["log"](_0x5c9f53(0xf6)),
        console[_0x5c9f53(0x125)]("\x1b[0mUsername:\x1b[33m", _0x98de41),
        console[_0x5c9f53(0x125)](
          _0x5c9f53(0xd6),
          _0x5e735b[_0x5c9f53(0x17e)]["telegramUserId"]
        ),
        console[_0x5c9f53(0x125)](
          _0x5c9f53(0x15a),
          _0x5e735b[_0x5c9f53(0x17e)]["clicksCount"]
        ),
        _0x5e735b[_0x5c9f53(0x17e)]
      );
    } catch (_0x4755b5) {
      console[_0x5c9f53(0xe4)](_0x5c9f53(0xbd), _0x4755b5);
    }
  }
  const {
    initData: _0x2ba73f,
    secret: _0x23acc6,
    tgId: _0x138b1b,
    username: _0x1ce24f,
  } = _0x453552;
  await _0x56290d(_0x2ba73f, _0x23acc6, _0x138b1b, _0x1ce24f);
  const _0x18a0db = {
      Initdata: _0x2ba73f,
      Secret: _0x23acc6,
      "Tg-Id": _0x138b1b,
      Username: _0x1ce24f,
    },
    _0x28ff9d = await getTasks(_0x18a0db);
  if (!_0x28ff9d) {
    console[_0x43c48e(0x125)](_0x43c48e(0x1a4), _0x1ce24f);
    return;
  }
  const _0x4cafed = _0x28ff9d[_0x43c48e(0x18a)],
    _0xae5329 = _0x28ff9d[_0x43c48e(0x166)],
    _0x4839de = _0x28ff9d[_0x43c48e(0xbf)];
  displayTasks(_0x43c48e(0xbc), _0x4cafed),
    displayTasks(_0x43c48e(0x16c), _0xae5329),
    displayTasks(_0x43c48e(0x150), _0x4839de);
  for (const _0x5e1533 of _0x4cafed) {
    await _0x2cd42d(_0x5e1533, _0x18a0db);
  }
  for (const _0x40cdf1 of _0xae5329) {
    await _0x2cd42d(_0x40cdf1, _0x18a0db);
  }
  async function _0x2cd42d(_0x3e4bae, _0xe71f07) {
    const _0x447699 = _0x43c48e;
    console[_0x447699(0x125)](""),
      console["log"](
        "Processing\x20task:\x20" +
          _0x3e4bae[_0x447699(0x10a)] +
          "\x20(ID:\x20" +
          _0x3e4bae["id"] +
          _0x447699(0xb7) +
          _0x3e4bae[_0x447699(0xcc)] +
          ")"
      ),
      await delay(0x1388);
    const _0x513fcb = await startTask(_0x3e4bae["id"], _0xe71f07);
    await delay(0x1388);
    if (_0x513fcb && _0x513fcb["userTaskId"]) {
      console[_0x447699(0x125)](
        _0x447699(0x101) +
          _0x513fcb[_0x447699(0x10a)] +
          _0x447699(0x140) +
          _0x513fcb[_0x447699(0x109)] +
          ")"
      );
      const _0x47b7e4 = await checkTaskStatus(
        _0x513fcb[_0x447699(0x109)],
        _0xe71f07
      );
      _0x47b7e4 && _0x47b7e4[_0x447699(0xfa)] === _0x447699(0xd8)
        ? console[_0x447699(0x125)](
            _0x447699(0x121) +
              _0x513fcb[_0x447699(0x10a)] +
              "\x20(Reward:\x20" +
              _0x513fcb["rewardPointsAmount"] +
              ")"
          )
        : console["log"](_0x447699(0x12c) + _0x513fcb["title"]);
    } else
      console[_0x447699(0x125)](_0x447699(0x15b) + _0x3e4bae[_0x447699(0x10a)]);
  }
}
async function clearTask() {
  const _0x52aa65 = _0x250576;
  console[_0x52aa65(0x125)](_0x52aa65(0x14e));
  try {
    await executeTasks();
  } catch (_0x4b948a) {
    console[_0x52aa65(0xe4)](_0x52aa65(0x11b), _0x4b948a);
  } finally {
    console[_0x52aa65(0x125)]("Dah\x20Selesai!"), process[_0x52aa65(0xd5)]();
  }
}
mainMenu();
