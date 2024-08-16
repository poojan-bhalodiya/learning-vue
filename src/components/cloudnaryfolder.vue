<!-- <template>
    <div>
        <h1>Cloudinary Folders</h1>
        <div v-if="folders.length">
            <h2>Root Folders:</h2>
            <ul>
                <li v-for="folder in folders" :key="folder.name">
                    <strong>{{ folder.name }}</strong>
                    <ul v-if="folder.subfolders.length">
                        <li v-for="subfolder in folder.subfolders" :key="subfolder.path">
                            {{ subfolder.name }}
                        </li>
                    </ul>
                    <p v-else>No subfolders found.</p>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No folders found or loading...</p>
        </div>
    </div>
</template>

<script>
import cloudinary from "cloudinary";

export default {
    data() {
        return {
            folders: [],
        };
    },
    mounted() {
        this.initializeCloudinary();
        this.listFolders();
    },
    methods: {
        initializeCloudinary() {
            cloudinary.config({
                cloud_name: "dd0mpmfxn",
                api_key: "448813374953961",
                api_secret: "sFMD8EQCi60rgLpLsoAQFj7SauM",
                secure: true,
            });
        },
        async listFolders() {
            try {
                const rootFolders = await cloudinary.v2.api.root_folders();
                const folderData = await Promise.all(
                    rootFolders.folders.map(async (folder) => {
                        const subfolderResult = await cloudinary.v2.api.sub_folders(folder.name);
                        return {
                            name: folder.name,
                            subfolders: subfolderResult.folders,
                        };
                    })
                );
                this.folders = folderData;
            } catch (error) {
                console.error("Error fetching folders:", error);
            }
        },
    },
};
</script> -->

<!-- <template>
    <div>
        <h1>Cloudinary Root Folders</h1>
        <ul>
            <li v-for="folder in folders" :key="folder.id">{{ folder.name }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/dd0mpmfxn/resources/folders';

export const getRootFolders = async () => {
    try {
        const response = await axios.get(CLOUDINARY_API_URL, {
            headers: {
                'Authorization': `Basic ${btoa('448813374953961:sFMD8EQCi60rgLpLsoAQFj7SauM')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching folders:', error);
        throw error;
    }
};


export default {
    data() {
        return {
            folders: []
        };
    },
    async created() {
        try {
            const result = await getRootFolders();
            this.folders = result.folders; // Adjust according to API response structure
        } catch (error) {
            console.error('Failed to fetch folders:', error);
        }
    }
};
</script> -->




<!------------------- -------------------------------------------------------------->
