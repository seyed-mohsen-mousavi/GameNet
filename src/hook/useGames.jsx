function useGames() {
  const games = [
    {
      id: 1,
      subTitle: "سی اس گو 2",
      desc: "بازی اول شخص و اکشن در گروه های پنچ نفره بازی اغاز شده و",
      image_preview: "/images/csgo.jpg",
      image_background: "/images/csgo/2.webp",
      link: "csgo",
      like: 665,
      save: 545,
      platform: ["pc"],
      category: "action",
      price: "0",
    },
    {
      id: 2,
      subTitle: "کالاف دیوتی مدرن وافای",
      desc: "بازی اول شخص و اکشن در گروه های پنچ نفره بازی اغاز شده و",
      image_preview: "/images/callofduty_کالاف دیوتی.jpg",
      image_background: "/images/callofduty/2.jpg",
      link: "call-of-duty",
      like: 20,
      save: 45,
      platform: ["pc", "ps4", "ps5", "xboxSeries"],
      category: "action",
      price: "69.99 $",
    },
    {
      id: 3,
      subTitle: "سایرپرانک",
      desc: "بازی اول شخص و اکشن در گروه های پنچ نفره بازی اغاز شده و",
      image_preview: "/images/Cyberpunk2077.jpg",
      image_background: "/images/cyberpunk/1.jpg",
      link: "cyberpunk2077",
      like: 28,
      save: 5,
      platform: ["pc", "ps4", "ps5", "xboxSeries"],
      category: "rolePlay",
      price: "59 $",
    },
    {
      id: 4,
      subTitle: "FC - 24",
      desc: " یک بازی ویدئویی شبیه‌سازی فوتبال است که توسط الکترونیک آرتس ونکوور و الکترونیک آرتز رومانی توسعه یافته و به‌وسیلهٔ ای‌ای اسپورتس منتشر شده است. این بازی اولین قسمت از سری ای‌ای اسپورتس اف سی است که در ۲۹ سپتامبر ۲۰۲۳ برابر با ۷ مهر ۱۴۰۲ به صورت رسمی ارایه شد .",
      image_preview: "/images/fc24.jpg",
      image_background: "/images/fc24_back.jpg",
      link: "fc24",
      like: 65,
      save: 545,
      platform: ["pc", "ps4", "ps5", "xboxSeries", "nintendoSwitch"],
      category: "Sports",
      price: "59 $",
    },
    {
      id: 5,
      subTitle: "جنون سرعت (حرارت)",
      desc: "این بازی شامل رویداد مسابقه خیابانی با نام هورایزن است که در کلرادو رخ می‌دهد. گیم‌پلی این بازی در بخش‌های مختلفی مثل تعدد خودروها، فیزیک واقع‌گرایانه و گرافیک باکیفیت مشابه فورزا موتور اسپورت می باشد. سری بازی‌های فورزا با داشتن سبک‌ها نو و گرافیک و گیم پلی چالش برانگیز و جذاب علاقه‌مندان فراوانی به خود جذب کرده‌است. این سری بازی‌ها معمولاً هر ۲ سال یک بار روانه بازار می‌شوند و این نسخه یک Spin-off برای سری بازی‌ها فورزا است. در این نسخه بازی از روال‌های نسخه‌های قبلی خود فاصله گرفته و در مرزها جدیدی خوش درخشیده‌است.",
      image_preview: "/images/need-for-speed-heat.jpg",
      image_background: "/images/need-for-speed-heat_back.avif",
      link: "need-for-speed_heat",
      like: 5,
      save: 15,
      platform: ["pc", "ps4"],
      category: "car",
      price: "10.49 $",
    },
    {
      id: 6,
      subTitle: "فورتزا هورایزن",
      desc: "این بازی شامل رویداد مسابقه خیابانی با نام هورایزن است که در کلرادو رخ می‌دهد. گیم‌پلی این بازی در بخش‌های مختلفی مثل تعدد خودروها، فیزیک واقع‌گرایانه و گرافیک باکیفیت مشابه فورزا موتور اسپورت می باشد. سری بازی‌های فورزا با داشتن سبک‌ها نو و گرافیک و گیم پلی چالش برانگیز و جذاب علاقه‌مندان فراوانی به خود جذب کرده‌است. این سری بازی‌ها معمولاً هر ۲ سال یک بار روانه بازار می‌شوند و این نسخه یک Spin-off برای سری بازی‌ها فورزا است. در این نسخه بازی از روال‌های نسخه‌های قبلی خود فاصله گرفته و در مرزها جدیدی خوش درخشیده‌است.",
      image_preview: "/images/forza-horizon-6.jpg",
      image_background: "/images/Forza6_back.webp",
      link: "forza",
      like: 12,
      save: 1,
      platform: ["pc", "xboxSeries"],
      category: "car",
      price: "32.78 $",
    },
    {
      id: 7,
      subTitle: "دو تا دو",
      desc: "یک بازی ویدئویی در ژانر بازی آنلاین چندنفره (Multiplayer Online Battle Arena) به اصطلاح موبا است که برای پلت‌فرم‌های مایکروسافت ویندوز، مک‌اواس و لینوکس منتشر شده‌است. این بازی کامل شدهٔ نسخه پیشین آن یعنی دفاع از خانه باستانی است. واژه DotA خلاصه شده از Defense of the Ancients به معنی دفاع از ساختمان باستانی است؛ هر تیم که بتواند ساختمان دشمن یا ancient را از بین ببرد، برنده است. این بازی به صورت 5v5 بازی می‌شود و درجه سختی بالایی دارد",
      image_preview: "/images/dota2.jpg",
      image_background: "/images/dota2.jpg",
      link: "dota2",
      like: 200,
      save: 25,
      platform: ["pc"],
      category: "strategy",
      price: "0",
    },
    {
      id: 8,
      subTitle: "آنچارتد ۴ ( عاقبت یک دزد )",
      desc: "یک بازی ویدئویی در سبک اکشن ماجراجویی و سکوبازی از مجموعه بازی‌های ویدئویی آنچارتد است که توسط شرکت ناتی داگ توسعه یافته و در ۱۰ مه ۲۰۱۶ به‌وسیلهٔ سونی اینتراکتیو انترتینمنت برای کنسول پلی‌استیشن ۴ منتشر شد. آنچارتد ۴ ابتدا با تیزری کوتاه در ۱۴ نوامبر ۲۰۱۳، یعنی زمان عرضه پلی‌استیشن ۴ رونمایی شد، و پس از آن ناتی داگ به‌طور رسمی در کنفرانس ای۳ ۲۰۱۴ سونی در ۹ ژوئن ۲۰۱۴، عنوان جدید و آخرین نسخه در این سری با نام آنچارتد ۴: عاقبت یک دزد را به همگان معرفی کرد",
      image_preview: "/images/unch4.jpg",
      image_background: "/images/unch4_back.jpg",
      link: "Uncharted4",
      like: 5,
      save: 7,
      platform: ["pc", "ps4", "ps5"],
      category: "actionAdventure",
      price: "49.99 $ ",
    },
    {
      id: 9,
      subTitle: "رزیدنت ایول ۴",
      desc: " یک بازی ویدئویی در سبک ترس و بقا است که توسط استودیو ۴ شرکت کپ‌کام ساخته شده و چندین ناشر شامل کپ‌کام، یوبی‌سافت و نینتندو آن را منتشر کرده‌اند.[۲] این بازی چهارمین نسخه اصلی از مجموعه بازی‌های رزیدنت ایول و ششمین نسخه در کنار نسخه‌های فرعی از این سری بوده که برای نخستین بار در ۱۱ ژانویه سال ۲۰۰۵ برای کنسول نینتندو گیم‌کیوب منتشر شد. نخستین تلاش برای ساخت نسخه چهارم این سری در دسامبر ۱۹۹۹ انجام پذیرفت. سرانجام نیز پس از ارائه چهار نمونه ویرایش برای این بازی، ساخت بازی در آن زمان متوقف شد و این بازی متوقف شده، رزیدنت ایول ۳٫۵ نام‌گذاری شد. این بازی هرگز منتشر نشد.[۳] درآغاز، این بازی برای کنسول پلی‌استیشن ۲ طراحی شده بود. زمانی که شینجی میکامی به عنوان تهیه‌کننده از هیدکی کامیا به عنوان کارگردان درخواست کرد تا نسخه چهارم این سری، از سبک جدیدی نسبت به نسخه‌های پیشین برخوردار باشد. اما پس از توقف ساخت بازی، این قطعی بود که این بازی، مجدداً ساخته خواهد شد.",
      image_preview: "/images/resident-evil-4.webp",
      image_background: "/images/resident-evil-4_back.webp",
      link: "ResidentEvil4",
      like: 12,
      save: 21,
      platform: ["pc", "ps4", "ps5", "xboxSeries", "nintendoSwitch"],
      category: "Survival",
      price: "29.99 $",
    },
    {
      id: 10,
      subTitle: "Grand theft auto",
      desc: " یک مجموعه بازی ویدیویی اکشن-ماجراجویی و جهان باز ساخته شده توسط دیوید جونز و مایک دیلی است،[۳] که پس از آن توسط دن و سم هوسر، لسلی بنزیه و آرون گاربت توسعه داده می‌شود. این مجموعه یکی از پرفروش‌ترین فرنچایزهای بازی‌های ویدیویی تاریخ است",
      image_preview: "/images/gtav_back.jpg",
      image_background: "/images/gtav_back.jpg",
      link: "GtaV",
      like: 232,
      save: 14,
      platform: ["pc", "ps4", "ps5", "xboxSeries", "nintendoSwitch"],
      category: "actionAdventure",
      price: "29.98 $",
    },
  ];
  return games;
}

export default useGames;
