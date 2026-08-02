const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  await prisma.crop.createMany({
    data: [
      {
        cropName: "Wheat",
        season: "Rabi",
        description:
          "Wheat is one of the major cereal crops grown during the Rabi season. It requires cool temperatures, fertile soil, and moderate irrigation. It is widely used for making flour, bread, and other food products."
      },
      {
        cropName: "Rice",
        season: "Kharif",
        description:
          "Rice is the staple food crop of India. It grows best in warm and humid climates with sufficient rainfall. Rice is rich in carbohydrates and is a primary source of energy."
      },
      {
        cropName: "Maize",
        season: "Kharif",
        description:
          "Maize is an important cereal crop used for human consumption, animal feed, and industrial purposes. It grows well in fertile, well-drained soil."
      },
      {
        cropName: "Potato",
        season: "Rabi",
        description:
          "Potato is a nutritious tuber crop rich in carbohydrates, vitamins, and minerals. It grows best in cool weather with well-drained soil."
      },
      {
        cropName: "Sugarcane",
        season: "Annual",
        description:
          "Sugarcane is a commercial cash crop mainly cultivated for sugar production. It requires warm temperatures, fertile soil, and regular irrigation."
      },
      {
        cropName: "Mustard",
        season: "Rabi",
        description:
          "Mustard is an important oilseed crop grown during the Rabi season. It requires cool weather and is widely used for edible oil production."
      }
    ],
    skipDuplicates: true
  });

  console.log("✅ Sample crops inserted successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });