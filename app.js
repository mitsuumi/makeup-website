const http = require('http')
const url=require('url')

const port = 3002

const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World')


// 获取url的各个部分
  // url.parse可以将req.url解析成一个对象
  // 里面包含有pathname和querystring等
  const urlObject = url.parse(req.url);
  const { pathname } = urlObject;
  // api开头的是API请求
  if (pathname.startsWith('/api')) {
    // 再判断路由
    if (pathname === '/api/products') {
      // 获取HTTP动词
      const method = req.method;
      if (method === 'GET') {
        // 写一个假数据
        const products=[
            {
                "productId":1,
                "title":"金鑽高效防曬露N (4X版)",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/0YzTaZB.jpg",
                "count":10,
                "sale":true,
                "type":"makeup"
            },
            {
                "productId":2,
                "title":"安耐曬全能防曬水凝粉",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/UJOiKHC.jpg",
                "count":10,
                "sale":true,
                "type":"makeup"
        
            },
            {
                "productId":3,
                "title":"柔光乳敏感肌特效防曬露N",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/fAT16Xu.jpg",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":4,
                "title":"水寶貝敏感肌高效防曬凝膠N",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/0mCBedj.jpg",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },   
            {
                "productId":5,
                "title":"Revlon ColorStay Satin Ink 5ml (Various Shades)N",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/D8h4jp2.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":6,
                "title":"Morphe 9W Smoke and Shadow Artistry Palette",
                "price":468,
                "description":"",
                "imageUrl":"https://i.imgur.com/NB4djmd.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":7,
                "title":"NYX Professional Makeup Highlight & Contour Pro Palette",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/2FVBJTg.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":8,
                "title":"Lime Crime 眼影盤 - Venus XL II",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/2OayiEr.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":9,
                "title":"West Barn Co Soap Brows® 25g",
                "price":1000,
                "description":"",
                "imageUrl":"https://i.imgur.com/3szEDex.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },   
            {
                "productId":10,
                "title":"Max Factor Facefinity 粉餅 10g - Number 002 - Ivory",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/IN5DvA2.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":11,
                "title":"Rimmel Lasting Radiance Powder - Honeycomb",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/L5bTgA2.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            }, 
            {
                "productId":12,
                "title":"ICONIC London Silk Glow Duo - Rose Glow",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/VmJo6RN.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":13,
                "title":"香緹卡慈善頰彩（多種色號）",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/Cqkd7Qa.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":14,
                "title":"Physicians Formula Murumuru Butter Blush 8g (Various Shades)",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/ElgEkFj.png",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":15,
                "title":"PFlorence by Mills Cheek Me Later Cream Blush - Zen Z 4.5g",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/sIIGZiR.jpg",
                "count":10,
                "sale":false,
                "type":"makeup"
        
            },
            {
                "productId":16,
                "title":"PIXI Glow Tonic Serum 30ml",
                "price":1014,
                "description":"",
                "imageUrl":"https://i.imgur.com/s5PrP7H.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },   
            {
                "productId":17,
                "title":"PIXI 滋養亮澤化妝水",
                "price":1200,
                "description":"",
                "imageUrl":"https://i.imgur.com/6Fq02UV.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":18,
                "title":"First Aid Beauty 急救美人强效急救修复面霜 170g",
                "price":1200,
                "description":"",
                "imageUrl":"https://i.imgur.com/STZfOOV.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":19,
                "title":"The Ordinary Glycolic Acid 7% Toning Solution 240ml",
                "price":1200,
                "description":"",
                "imageUrl":"https://i.imgur.com/WxLywmH.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
            
            },  
            {
                "productId":20,
                "title":"Burt's Bees 100% 天然夜間密集修護唇膜",
                "price":1200,
                "description":"",
                "imageUrl":"https://i.imgur.com/zR1cDde.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":21,
                "title":"Body Hero Dry-Touch Oil Mist",
                "price":280,
                "description":"",
                "imageUrl":"https://i.imgur.com/dnqE8Mt.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":22,
                "title":"Balm Dotcom",
                "price":280,
                "description":"",
                "imageUrl":"https://i.imgur.com/XA3exUg.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":23,
                "title":"Elizabeth Arden 八小時滋潤護脣膏",
                "price":280,
                "description":"",
                "imageUrl":"https://i.imgur.com/1jRdj8k.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":24,
                "title":"薇蕾德 Skin Food 潤膚乳 (75ml)",
                "price":560,
                "description":"",
                "imageUrl":"https://i.imgur.com/DzYqU6b.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":25,
                "title":"Caudalie歐緹麗葡萄活性精華清爽化妝水 100ml",
                "price":560,
                "description":"",
                "imageUrl":"https://i.imgur.com/bd4DXeq.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":26,
                "title":"Face by Skinny Tan Moisturising Oil Drops 30ml",
                "price":560,
                "description":"",
                "imageUrl":"https://i.imgur.com/me7qNYt.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":27,
                "title":"Garnier Micellar Rose Water Cleanse & Glow 100ml",
                "price":560,
                "description":"",
                "imageUrl":"https://i.imgur.com/BbtJWPZ.png",
                "count":10,
                "sale":true,
                "type":"cosmetics"
        
            },
            {
                "productId":28,
                "title":"巴黎歐樹全效晶亮精華油 - 炫亮版 100ml",
                "price":560,
                "description":"",
                "imageUrl":"https://i.imgur.com/KeFm9ct.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":29,
                "title":"L'Oréal Professionnel 專業護髮專家 Vitamino Color 護色洗髮精及潤髮乳雙件組",
                "price":560,
                "description":"",
                "imageUrl":"https://i.imgur.com/EapPLMz.png",
                "count":10,
                "sale":false,
                "type":"cosmetics"
        
            },
            {
                "productId":30,
                "title":"OUAI Detox Shampoo Travel Size 89ml",
                "price":390,
                "description":"",
                "imageUrl":"https://i.imgur.com/DxeOyJC.png",
                "count":10,
                "sale":true,
                "type":"cosmetics"
        
            }
            
        ]
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(products));
        return;
      }
    }
  }
  

})

server.listen(port, () => {
  console.log(`Server is running on http://218.210.98.161:${port}/`)
})