const Koa = require("koa");
const app = new Koa();
const path = require("path");
const serve = require("koa-static");
const fs = require("fs");
const route = require("koa-route");
const bodyparser = require("koa-bodyparser");

Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

app.use(serve(path.join(__dirname)));

app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
    formLimit: "10mb"
  })
);

app.use(
  route.get("/", ctx => {
    ctx.response.redirect("index.html");
  })
);

// app.use(
//   route.get("/file/:name", async (ctx, name) => {
//     var data = await readFile("static/data/" + name);
//     ctx.body = data.toString();
//   })
// );

app.use(
  route.post("/file/:name", async (ctx, name) => {
    if (new RegExp('[\\\\/:*?"<>|.]').test(name)) {
      ctx.body = "文件名不允许特殊字符";
      return;
    }
    let filePath = `static/data/${name}`;
    if (fs.existsSync(filePath)) {
      ctx.body = "文件已存在";
      return;
    }

    let msg = "";
    try {
      // 创建文件
      await writeFile(filePath, "");
      // 更新列表
      let list = await readFile("static/data/list.json");
      list = list.toString();
      list = JSON.parse(list);
      list.files.push(name);
      let newList = JSON.stringify(list);
      await writeFile("static/data/list.json", newList);
    } catch (error) {
      msg = "创建文件失败";
    }

    ctx.body = msg;
  })
);

app.use(
  route.put("/:user/:name", async (ctx, user, name) => {
    console.log(user)
    console.log(name)

    if (!ctx.request.body.data) {
      ctx.body = "无数据";
      return;
    }
    try {
      await writeFile(`static/data/${user}/txt/${name}`, ctx.request.body.data);
      uploadData();
    } catch (error) {
      msg = "更新失败";
    }
    ctx.body = "";
  })
);

app.use(
  route.delete("/file/:name", async (ctx, name) => {
    let filePath = `static/data/${name}`;
    await fs.unlink(filePath);

    let msg = "";
    try {
      // 更新列表
      let list = await readFile("static/data/list.json");
      list = list.toString();
      list = JSON.parse(list);
      list.files.remove(name);
      let newList = JSON.stringify(list);
      await writeFile("static/data/list.json", newList);
    } catch (error) {
      msg = "删除文件失败";
    }

    ctx.body = msg;
  })
);

app.listen(3333);

function uploadData() {
  var nodeCmd = require("node-cmd");

  nodeCmd.run(__dirname + "\\upload.bat");
}

function loopDirGetFilename(theDirPath, getfiles) {
  theDirPath += "/";
  getfiles = getfiles || [];
  var files = fs.readdirSync(theDirPath);
  files.forEach(filename => {
    var stats = fs.statSync(theDirPath + filename);
    if (stats.isFile()) getfiles.push(theDirPath + filename);
    if (stats.isDirectory())
      loopDirGetFilename(theDirPath + filename + "/", getfiles);
  });
  return getfiles;
}

async function readFile(filename) {
  return new Promise((s, j) => {
    fs.readFile(filename, function (err, data) {
      if (err) j(err);
      s(data);
    });
  });
}

async function writeFile(filename, data) {
  return new Promise((s, j) => {
    fs.writeFile(filename, data, function (err) {
      if (err) j(err);
      s();
    });
  });
}
