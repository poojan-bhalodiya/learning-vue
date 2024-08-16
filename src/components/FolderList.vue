<!-- <template>
    <div>
        <h1>Cloudinary Folders</h1>
        <ul>
            <li v-for="folder in folders" :key="folder.path">
                {{ folder.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { getCloudinaryFolders } from '@/cloudinaryService';

export default {
    data() {
        return {
            folders: [],
        };
    },
    async created() {
        this.folders = await getCloudinaryFolders();
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 8px 0;
}
</style> -->
<template>
  <div>
    <h1>Cloudinary Folders</h1>
    <ul>
      <li v-for="folder in folders" :key="folder.name">{{ folder.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      folders: []
    };
  },
  mounted() {
    this.getFolders();
  },
  methods: {
    async getFolders() {
      try {
        const response = await axios.get('/.netlify/functions/getFolders');
        this.folders = response.data.folders;
      } catch (error) {
        console.error('Error fetching folders:', error);
      }
    }
  }
};
</script>
