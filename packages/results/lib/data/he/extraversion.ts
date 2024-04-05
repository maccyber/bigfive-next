import { Domain } from "../../types"

const extraversion: Domain = {
  domain: 'E',
  title: 'חוצפה',
  shortDescription: 'החריגה מתבטאת באינטראקציה בולטת עם העולם החיצוני.',
  description: `חוצפה נהנית להיות עם אנשים, מלאים באנרגיה, ו
לעתים קרובות לחוות רגשות חיוביים. הם נוטים להיות נלהבים,
אקטיביים, אנשים שעשויים לומר "כן!" או "בואו
ללכת! "להזדמנויות להתרגשות: בקבוצות הם אוהבים לדבר,
להתווכח, למשוך תשומת לב לעצמם.
<br /> <br />
מופנמים חסרים את התרוממות רוח, אנרגיה, ופעילות הרמות
. הם נוטים להיות שקטים, נמוכים, מכוונים, ו
מנותקים מן העולם החברתי. חוסר המעורבות החברתית שלהם
לא צריך להתפרש כמו ביישנות או דיכאון; ה
מופנם פשוט צריך פחות גירוי מאשר אקסטרוורט ומעדיף
להיות לבד. <br /> <br /> עצמאות ושמירה של מופנם הוא
לפעמים טועה כמו חוסר ידידות או יהירות. במציאות, א
מופנם מי ציונים גבוהים על הממד הנועם לא
לחפש אחרים, אבל יהיה די נעים כאשר התקרב.`,
  results: [
    {
      score: 'low',
      text: `הציון שלך על אקסטרסיה הוא נמוך, מה שמעיד על כך
מופנם, שמור ושקט. אתה נהנה בדידות בודד
פעילויות. החבר שלך נוטה להיות מוגבל למספר חברים קרובים.`
    },
    {
      score: 'neutral',
      text: `הניקוד שלך על ההחצנה הוא ממוצע, המציין שאתה
לא מתבודד מאופק וגם לא פטפטן עליז. אתה נהנה עם הזמן
אחרים, אלא גם לבד.`
    },
    {
      score: 'high',
      text: `הניקוד שלך על ההחצנה הוא גבוה, המציין שאתה
חברותי, יוצא, אנרגטי, תוסס. אתה מעדיף להיות בסביבה
אנשים רוב הזמן.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'חַברוּתִיוּת',
      text: `אנשים ידידותיים באמת כמו אנשים אחרים
ולהפגין בגלוי רגשות חיוביים כלפי אחרים. הם מכינים
חברים במהירות וקל להם ליצור קרוב, אינטימי
יחסים. סקוררים נמוכים על ידידות הם לא בהכרח קר
ועוינות, אבל הם לא להושיט יד לאחרים נתפסים
מרוחק ומרוחק.`
    },
    {
      facet: 2,
      title: 'גמישות',
      text: `אנשים גמישים מוצאים את החברה של
אחרים מגרים ומעניקים נעימה. הם נהנים
ההתרגשות של ההמונים. ציון נמוך נוטים להרגיש המום, ו
ולכן פעיל להימנע, קהל גדול. הם לא בהכרח
לא אוהב להיות עם אנשים לפעמים, אבל הצורך שלהם לפרטיות
הזמן לעצמם הוא הרבה יותר גדול מאשר עבור אנשים ציון
גבוה בסולם זה.`
    },
    {
      facet: 3,
      title: 'Assertiveness',
      text: `High scorers Assertiveness like to speak
 out, take charge, and direct the activities of others. They tend to
 be leaders in groups. Low scorers tend not to talk much and let
 others control the activities of groups.`
    },
    {
      facet: 4,
      title: 'רמת הפעילות',
      text: `אנשים פעילים להוביל המהיר, עסוק
חיים. הם נעים במהירות, במרץ, במרץ
הם מעורבים בפעילויות רבות. אנשים אשר ניקוד נמוך על זה
בקנה מידה איטי יותר ויותר נינוח, רגוע קצב.`
    },
    {
      facet: 5,
      title: 'חיפוש ריגושים',
      text: `ציון גבוה בסולם זה בקלות
משועמם ללא רמות גבוהות של גירוי. הם אוהבים אורות בהירים
ואת המהומה ואת ההמולה. הם צפויים לקחת סיכונים ולחפש
ריגושים. קלעים נמוכים הם המום רעש ומהומה והם
שלילי כדי ריגוש המבקשים.`
    },
    {
      facet: 6,
      title: 'עליזות',
      text: `סולם זה מודד מצב רוח חיובי
רגשות, לא רגשות שליליים (שהם חלק
תחום נוירוטיזם). אנשים אשר ציון גבוה בסולם זה בדרך כלל
לחוות מגוון של רגשות חיוביים, כולל אושר,
התלהבות, אופטימיות ושמחה. ציון נמוך אינם נוטים כזה
אנרגטית, רוחות גבוהות.`
    }
  ]
}

export default extraversion
