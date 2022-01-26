import * as parser from 'editorjs-html'
import { makeid } from './utils'

export const image = (blockData) => {
  const width = 1200
  const height = parseInt(
    (width * blockData.data.file.height) / blockData.data.file.width
  )
  const isFullWidth = !!blockData.data.stretched
  const smallWidth = parseInt(width / 2)
  const smallHeight = parseInt(height / 2)

  const smallImage = `${process.env.apiUrl}assets/${
    blockData.data.file.fileId
  }.${blockData.data.file.extension}?width=${smallWidth}&quality=80#${makeid()}`
  const bigImage = `${process.env.apiUrl}assets/${blockData.data.file.fileId}.${
    blockData.data.file.extension
  }?width=${width}&quality=80#${makeid()}`
  const smallImageWebP = `${process.env.apiUrl}assets/${
    blockData.data.file.fileId
  }.${
    blockData.data.file.extension
  }?width=${smallWidth}&quality=80&format=webp#${makeid()}`
  const bigImageWebP = `${process.env.apiUrl}assets/${
    blockData.data.file.fileId
  }.${
    blockData.data.file.extension
  }?width=${width}&quality=80&format=webp#${makeid()}`

  return `<figure class="is-${isFullWidth ? 'full' : 'half'}">
    <picture>
      <source media="(max-width: ${smallWidth}px)" srcset="${smallImageWebP}" />
      <source media="(max-width: ${smallWidth}px)" srcset="${smallImage}" />
      ${
        isFullWidth
          ? `
        <source media="(min-width: ${
          smallWidth + 1
        }px)" srcset="${bigImageWebP}" />
        <source media="(min-width: ${smallWidth + 1}px)" srcset="${bigImage}" />
      `
          : ''
      }
      <img
          loading="lazy"
          width="${isFullWidth ? width : smallWidth}"
          height="${isFullWidth ? height : smallHeight}"
          src="${smallImage}"
          title="${blockData.data.caption}"
          alt="${blockData.data.caption || blockData.data.file.title}"
      />
    </picture>${
      blockData.data.caption
        ? `<figcaption>${blockData.data.caption}</figcaption>`
        : ''
    }
</figure>`
}

export const edjsParser = parser({ image })

export const createHTML = (blocks) => edjsParser.parseStrict(blocks).join('')
