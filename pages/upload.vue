<script>
// eslint-disable-next-line import/default
import Tesseract from 'tesseract.js'

export default {
  data() {
    return {
      imageUrl: null,
      fileName: null,
      extractedText: null
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.imageUrl = reader.result
        this.fileName = file.name
      }
      reader.readAsDataURL(file)
    },
    deleteImage() {
      this.imageUrl = null
      this.fileName = null
      this.extractedText = null
      // Clear the file input element to allow selecting the same file again
      const input = document.getElementById('image-upload')
      input.value = ''
    },
    runOCR() {
      Tesseract.recognize(this.imageUrl)
        .then((result) => {
          this.extractedText = result.text
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center bg-gray-900 p-8">
    <label
      for="image-upload"
      class="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 transition-colors duration-200 ease-in-out hover:bg-gray-600"
    >
      <span class="text-lg font-medium">Upload Image</span>
    </label>
    <input id="image-upload" type="file" class="hidden" @change="handleFileUpload" />
    <img v-if="imageUrl" :src="imageUrl" class="mt-8" />
    <div v-if="imageUrl">
      <p class="mt-4 text-gray-400">
        {{ fileName }}
      </p>
      <button
        class="mt-4 rounded-md bg-red-600 px-4 py-2 text-gray-100 transition-colors duration-200 ease-in-out hover:bg-red-500"
        @click="deleteImage"
      >
        Delete Image
      </button>
      <button
        class="mt-4 rounded-md bg-purple-600 px-4 py-2 text-gray-100 transition-colors duration-200 ease-in-out hover:bg-purple-500"
        @click="runOCR"
      >
        Run OCR
      </button>
      <p v-if="extractedText" class="mt-4 text-gray-100">
        {{ extractedText }}
      </p>
    </div>
  </div>
</template>
